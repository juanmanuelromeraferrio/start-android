package #PACKAGE_NAME#.activity.register;

import #PACKAGE_NAME#.activity.BaseView;

/**
 * Created by Juan Manuel Romera on 21/5/2016.
 */
public interface CreateAccountView extends BaseView {

    void setNameError();

    void setEmailError();

    void setPasswordError();

    void onError(String errorMsg);

}