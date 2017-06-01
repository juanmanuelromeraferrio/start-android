package com.android.start.activity.register;

import com.android.start.activity.BaseView;

/**
 * Created by Juan Manuel Romera on 21/5/2016.
 */
public interface CreateAccountView extends BaseView {

    void setNameError();

    void setEmailError();

    void setPasswordError();

    void onError(String errorMsg);

}