package #PACKAGE_NAME#;

import android.app.Application;
import android.content.Context;

import #PACKAGE_NAME#.infrastructure.Database;
import #PACKAGE_NAME#.infrastructure.StartAndroidDatabase;
import #PACKAGE_NAME#.service.api.Services;
import #PACKAGE_NAME#.service.factory.ServiceFactory;


/**
 * Created by Juan Manuel Romera on 13/9/2015.
 */
public class StartAndroidApplication extends Application {

    private static Context mContext;

    @Override
    public void onCreate() {
        super.onCreate();
        mContext = this;
        initConfiguration();
    }

    private void initConfiguration() {
        Database database = new StartAndroidDatabase();
        ServiceFactory.init(Services.MOCK, database);
    }

    public static Context getContext() {
        return mContext;
    }

}

