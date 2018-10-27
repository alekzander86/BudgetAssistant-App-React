import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import uniqueValidator from'mongoose-unique-validator';

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        lowercase: true,
        index: true,
        unique: true
    },

    confirmed:{
        type: Boolean,
        default: false
    },
    confirmationToken: {type: String, default: ""},
    passwordHash: {
        type: String,
        required: true
    }


},{timestamps: true});

// METODO PARA VERIFICAR SI LA CONTRASEÑA INGRESADA CORRESPONDE CON LA 
// CONTRASEÑA ENCRIPTADA EN LA BASE DE DATOS 
userSchema.methods.isValidPassword = function isValidPassword(password){
    return bcrypt.compareSync(password, this.passwordHash);
}
// METODO QUE DEVUELVE UN OBJETO CON EL EMAIL Y EL TOKEN DEL USUARIO QUE HA 
// INICIADO SESION 
userSchema.methods.toAuthJSON = function toAuthJSON(){
    return {
        
        username: this.username,
        email: this.email,
        confirmed: this.confirmed,
        token: this.generateJWT()
    }
}

// METODO PARA GENERAR EL TOKEN PROVISIONAL DEL USUARIO QUE HA INICIADO SESION CON
// CRENDENCIALES VALIADAS
userSchema.methods.generateJWT = function generateJWT(){
    return  jwt.sign(
        {   
            email: this.email, 
            username: this.username,
            confirmed: this.confirmed
        }, 
        process.env.JWT_SECRET
    );

};


userSchema.methods.getIdUser = function getIdUser(){
    return {_id : this._id}
}

userSchema.methods.setPassword = function setPassword(password){
    this.passwordHash = bcrypt.hashSync(password, 10);
}

userSchema.methods.setConfirmationToken = function setConfirmationToken(){
    this.confirmationToken = this.generateJWT();
}

userSchema.methods.generateConfirmationUrl = function generateConfirmationUrl(){
    return `${process.env.HOST}/confirmation/${this.confirmationToken}`
}

userSchema.plugin(uniqueValidator, {message: 'This email is already taken'});


userSchema.methods.generateResetPasswordLink = function generateResetPasswordLink(){
    return `${process.env.HOST}/reset_password/${this.generateResetPasswordToken()}`
}

userSchema.methods.generateResetPasswordToken = function generateResetPasswordToken(){
    return  jwt.sign(
        {   
            _id: this._id
        }, 
        process.env.JWT_SECRET,
        {expiresIn : "1h"}
    );
}

export default mongoose.model('User', userSchema);