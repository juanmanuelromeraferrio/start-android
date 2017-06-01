package com.android.start.service.impl;


import com.android.start.R;
import com.android.start.StartAndroidApplication;
import com.android.start.dto.User;
import com.android.start.error.service.ServiceException;
import com.android.start.infrastructure.Database;
import com.android.start.service.api.UserService;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by Juan Manuel Romera on 18/5/2016.
 */

public class UserServiceMock extends UserService {

    private final String USERS = "USERS";
    private final String LOGGED_USER = "LOGGED_USER";

    public UserServiceMock(Database database) {
        super(database);
    }

    @Override
    public void createUser(User user) throws ServiceException {
        if (userExists(user)) {

            String errorMessage = StartAndroidApplication.getContext().getResources().getString(R.string.existing_account, user.getEmail());
            throw new ServiceException(errorMessage);
        }
        saveUser(user);
    }

    @Override
    public boolean isUserLogged() throws ServiceException {
        return getLoggedUser() != null;
    }

    @Override
    public void loginUser(String email, String password) throws ServiceException {
        User user = getUser(email);
        boolean success = false;
        if (user != null) {
            if (user.getPassword().equals(password)) {
                success = true;
            }
        }
        if (success) {
            saveUser(user);

        } else {
            String errorMessage = StartAndroidApplication.getContext().getResources().getString(R.string.error_login);
            throw new ServiceException(errorMessage);
        }

    }

    private boolean userExists(User user) {
        return getUser(user.getEmail()) != null;
    }


    public void saveUser(User user) {
        Map<String, User> users = getUsers();
        users.put(user.getEmail(), user);
        database.save(USERS, users);
        database.save(LOGGED_USER, user);
    }

    @Override
    public User getLoggedUser() {
        return database.get(LOGGED_USER, User.class);
    }

    @Override
    public void logout() {
        database.save(LOGGED_USER, null);
    }

    private Map getUsers() {
        Map<String, User> users = this.database.get(USERS, Map.class);
        if (users == null) {
            return new HashMap();
        }

        return users;
    }

    private User getUser(String email) {
        Map users = getUsers();
        Object user = users.get(email);

        if (user == null)
            return null;

        Gson gson = new Gson();
        JsonObject jsonObject = gson.toJsonTree(user).getAsJsonObject();
        return gson.fromJson(jsonObject, User.class);
    }
}
