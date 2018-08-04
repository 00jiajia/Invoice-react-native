package com.maininvoice;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.io.File;


public class FileUploadIntentModule extends ReactContextBaseJavaModule {

    private ReactContext mContext;

    public FileUploadIntentModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        return "FileUploadIntentModule";
    }

    @ReactMethod
    public void callNativeBySend() {

        Activity currentActivity = getCurrentActivity();
        if (currentActivity != null) {
            Intent intent = new Intent(currentActivity, FileUploadActivity.class);
            currentActivity.startActivity(intent);
        }

        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("result", "success");

    }

    @ReactMethod
    public void downloadFile(String msg) {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity != null) {
            Intent intent = new Intent(currentActivity, FileDownloadActivity.class);
            currentActivity.startActivity(intent);
        }
    }


}
