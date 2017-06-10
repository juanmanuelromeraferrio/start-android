package #PACKAGE_NAME#.activity.login;

import #PACKAGE_NAME#.activity.BaseView;

/**
 * Created by Juan Manuel Romera on 21/5/2016.
 */

public interface LoginView extends BaseView {

    void setEmailError(String error);

    void setPasswordError(String error);

    void onError(String errorMsg);
}
