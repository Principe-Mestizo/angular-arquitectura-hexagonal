

export class UserEntity {
  constructor(
    public id_usuario:       string,
    public nombre:           string,
    public apellidos:        string,
    public tipo_usuario:     string,
    public edad:             number,
    public fecha_nacimiento: Date,
  ){}

}