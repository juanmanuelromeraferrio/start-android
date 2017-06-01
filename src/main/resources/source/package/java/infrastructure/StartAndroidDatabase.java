package #PACKAGE_NAME#.infrastructure;

import android.content.Context;
import android.content.SharedPreferences;

import #PACKAGE_NAME#.StartAndroidApplication;
import com.google.gson.Gson;

/**
 * Created by Juan Manuel Romera on 18/5/2016.
 */
public class StartAndroidDatabase implements Database {

    private static final String DB = "DB";

    @Override
    public <T extends Object> void save(String key, Object value) {
        SharedPreferences sharedPref = StartAndroidApplication.getContext().getSharedPreferences(DB, Context.MODE_PRIVATE);
        SharedPreferences.Editor prefsEditor = sharedPref.edit();
        Gson gson = new Gson();
        String json = gson.toJson(value);
        prefsEditor.putString(key, json);
        prefsEditor.commit();
    }

    @Override
    public <T extends Object> T get(String key, Class<T> classValue) {
        SharedPreferences sharedPref = StartAndroidApplication.getContext().getSharedPreferences(DB, Context.MODE_PRIVATE);
        Gson gson = new Gson();
        String json = sharedPref.getString(key, "");
        return gson.fromJson(json, classValue);
    }
}
