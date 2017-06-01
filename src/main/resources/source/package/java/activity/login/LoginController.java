package com.android.start.activity.login;

import com.android.start.activity.BaseController;

/**
 * Created by Juan Manuel Romera on 21/5/2016.
 */
public interface LoginController extends BaseController {

    void loginUser(String email, String password);
}
