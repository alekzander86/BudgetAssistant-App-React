import React,{Component} from 'react';
import InlineErrors from '../messages/InlineErrors';
import {connect} from 'react-redux';
import Validator from 'validator';
import PropTypes from 'prop-types';
import Select from 'react-select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ];

class IncomeRecordForm extends Component {
    
    state={
        data:{
            amount: '0',
            description: '',
            date: null,
            option: null,
            
        },
        errors:{},
        selectedOption: null,
        selectDate: null,
        selectedDay: null
    } 
    
    handleSelectItem = (option) =>{
    //    console.log(this.refs.itemSelector.value);
    //    const updateId = this.refs.itemSelector.value;
    //    const updateData = {
    //        ...this.state.data
    //     }

    //    updateData.id = updateId;
    //    this.setState({data: updateData});

        this.setState({selectedOption: option});

        const updateOption = option.value;
        const updateData ={
            ...this.state.data
        }
        updateData.option = updateOption;
        this.setState({data: updateData});
    }

    handleDayChange = (day) =>{
        //console.log(day.toLocaleString());
        this.setState({selectedDay:day});
        const updateDate = day.toLocaleString();
        const updateData = {
            ...this.state.data
        }
        updateData.date = updateDate;
        this.setState({data: updateData});
    }
       
    handleChange = e => this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    });

    handleSubmit = (e) =>{
        e.preventDefault();
        //primero se valida que los campos del formulario sean llenados correctamente
        const errors = this.validate(this.state.data);
        //se establece el estado de errors
        this.setState({ errors });
        //si el objeto errors no tiene elementos se procede a enviar los datos del usuario
        if (Object.keys(errors).length === 0) {
            this.props
            .submit(this.state.data)
             
        }
    }

    validate=data=>{
        const errors ={};
        if(data.amount === '0') errors.amount = "Amount not defined"
        if(!Validator.isCurrency(data.amount)) errors.amount = 'The amount is not valid'
        if(!data.option || data.option === null) errors.option = "Type of income not defined"
        if(!data.date || data.date === null) errors.date = "Date not defined"
        return errors;
    };

    render(){

        
        // const optionList =  this.props.Types.map((Type,index)=>{
        //     return <option  key={index} value={Type.item} >{Type.item}</option> 
        // })

        // para cada elemento, se crea un nuevo objeto con las nuevas propiedades.
        const options = this.props.Types.map(Type => { 
            return { value: Type.item , label: Type.item }; 
        });

        const { errors, selectedOption} = this.state;
        const {amount} = this.state.data;
       
        return(


            <div className="container mt-5">
                <div className="col-md-4 offset-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title mb-3">
                                    <h3 className="text-primary">Income record form</h3>
                                    <hr/>
                                </div>
                                
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="fas fa-dollar-sign"></i></div>
                                                </div>
                                                <input value={amount} onChange={this.handleChange} name="amount" autoComplete="off"  className="form-control" type="text" placeholder="insert the amount of income"/>
                                            </div>
                                        </div>
                                        {errors.amount &&<InlineErrors text={errors.amount}/>}
                                        <div className="form-group">
                                            <div className="input-group">
                                                
                                                <textarea onChange={this.handleChange} name="description" autoComplete="false" cols="30" rows="auto" className="form-control" placeholder="Optional description of your income"></textarea>
                                            </div>
                                        </div>

                                        {/* <div className="form-group">
                                            <h6 className="text-center">Please, select a the type of income</h6>
                                            <select ref="itemSelector" onChange={this.handleSelectItem} name="id" className="form-control">{optionList}</select>
                                        </div> */}
                                        
                                        <div className="form-group">
                                            <Select name="id" value={selectedOption} onChange={this.handleSelectItem} options={options}/>
                                        </div>
                                        {errors.option &&<InlineErrors text={errors.option}/>}

                                        <div className="form-group">
                                            {/* <DatePicker  value={selectDate} onChange={this.handleSelectDate}/> */}
                                            <DayPickerInput onDayChange={this.handleDayChange} />
                                        </div>   
                                        {errors.date &&<InlineErrors text={errors.date}/>}    
                                        <button type="submit" className="btn btn-block btn-primary">Save</button>

                                    </form>
                                
                            </div>
                        </div>
                    </div>
            </div>
        )

    }
    
    
}


function mapStateToProps(state){
    return{
        Types: state.incomeTypes
    }
}

IncomeRecordForm.propTypes={
    submit: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(IncomeRecordForm);