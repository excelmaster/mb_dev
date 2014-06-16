
package com.invent_mbdb.data;



/**
 *  invent_mbDB.Users
 *  06/16/2014 12:03:46
 * 
 */
public class Users {

    private Integer id;
    private String prinombre;
    private String demasnombres;
    private String priapellido;
    private String segapellido;
    private String username;
    private String password;
    private String cargo;
    private Integer rol;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPrinombre() {
        return prinombre;
    }

    public void setPrinombre(String prinombre) {
        this.prinombre = prinombre;
    }

    public String getDemasnombres() {
        return demasnombres;
    }

    public void setDemasnombres(String demasnombres) {
        this.demasnombres = demasnombres;
    }

    public String getPriapellido() {
        return priapellido;
    }

    public void setPriapellido(String priapellido) {
        this.priapellido = priapellido;
    }

    public String getSegapellido() {
        return segapellido;
    }

    public void setSegapellido(String segapellido) {
        this.segapellido = segapellido;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public Integer getRol() {
        return rol;
    }

    public void setRol(Integer rol) {
        this.rol = rol;
    }

}
