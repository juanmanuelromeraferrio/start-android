package com.android.start.activity.register;

import com.android.start.activity.BaseController;

/**
 * Created by Juan Manuel Romera on 21/5/2016.
 */
public interface CreateAccountController extends BaseController {

    void createAccount(String name, String email, String password);
}
