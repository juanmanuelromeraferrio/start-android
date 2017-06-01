package com.android.start.dto;

import java.io.Serializable;

/**
 * Created by Juan Manuel Romera on 28/5/2017.
 */

public class User implements Serializable {

    private String name;
    private String email;
    private String password;

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
