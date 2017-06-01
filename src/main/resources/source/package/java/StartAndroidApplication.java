package com.android.start;

import android.app.Application;
import android.content.Context;

import com.android.start.infrastructure.Database;
import com.android.start.infrastructure.StartAndroidDatabase;
import com.android.start.service.api.Services;
import com.android.start.service.factory.ServiceFactory;


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

