package com.maininvoice.util;

import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;

import java.io.BufferedInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class FileUploadUtil {
    public static String sendFile(String urlPath, Uri filePath,
                                  String newName) throws Exception {
        FileInputStream fileInputStream = new FileInputStream(new File(filePath.getPath()));

        String end = "\r\n";
        String twoHyphens = "--";
        String boundary = "*****";
        int bytesAvailable,bytesRead;
        int maxBufferSize = 1 * 1024 * 1024;

        URL url = new URL(urlPath);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        //下载需要将setDoInput方法的参数值设为true
        con.setDoInput(true);
        //上传需要将setDoOutput方法的参数值设为true
        con.setDoOutput(true);
        //禁止HttpURLConnection使用缓存
        con.setUseCaches(false);
        //使用POST请求，必须大写
        con.setRequestMethod("POST");
        //以下三行设置http请求头信息
        con.setRequestProperty("Connection", "Keep-Alive");
        con.setRequestProperty("ENCTYPE", "multipart/form-data");
        //con.setRequestProperty("Charset", "UTF-8");
        //在模拟web页面向服务器端上传文件时，每个文件的开头需要有一个分界符，
        //分界符需要在http请求头中指定。boundary是任意一个字符串，一般为******
        con.setRequestProperty("Content-Type", "multipart/form-data;boundary="
                + boundary);
        con.setRequestProperty("file", newName);

        DataOutputStream ds = new DataOutputStream(con.getOutputStream());

        ds.writeBytes(twoHyphens + boundary + end);
        //上传文件相关信息，这些信息包括请求参数名，上传文件名，文件类型，但并不限于此
        ds.writeBytes("Content-Disposition: form-data; "
                + "name=\"file\";filename=\"" + newName + "\"" + end);
        ds.writeBytes(end);

        bytesAvailable = fileInputStream.available();

        /* 设置每次写入1024bytes */
        int bufferSize = Math.min(bytesAvailable, maxBufferSize);;
        byte[] buffer = new byte[bufferSize];

        bytesRead = fileInputStream.read(buffer, 0, bufferSize);

        while (bytesRead > 0) {

            ds.write(buffer, 0, bufferSize);
            bytesAvailable = fileInputStream.available();

            bufferSize = Math.min(bytesAvailable, maxBufferSize);
            bytesRead = fileInputStream.read(buffer, 0, bufferSize);
        }

        ds.writeBytes(end);
        ds.writeBytes(twoHyphens + boundary + twoHyphens + end);

        int serverResponseCode = con.getResponseCode();
        String serverResponseMessage = con.getResponseMessage();

        //一般这个地方要写一个日志的

//        if(serverResponseCode == 200){
//            //
//        }else {
//            //
//        }

        ds.close();
        ds.flush();

        return serverResponseMessage;
    }


    public synchronized static String downloadFile(String path){
        String saveFilePath="";
        try {

        URL url = new URL(path);
        URLConnection connection = url.openConnection();
        connection.connect();
        // this will be useful so that you can show a typical 0-100% progress bar
        int fileLength = connection.getContentLength();

        String newFileName="hk"+ new SimpleDateFormat("yyyyMMdd").format(new Date());
        saveFilePath="/"+newFileName+".xls";
        // download the file
        InputStream input = new BufferedInputStream(connection.getInputStream());
        OutputStream output = new FileOutputStream(new File(Environment.getExternalStorageDirectory()+ saveFilePath));

        byte data[] = new byte[1024];
        long total = 0;
        int count;
        while ((count = input.read(data)) != -1) {
            total += count;
            output.write(data, 0, count);
        }

        output.flush();
        output.close();
        input.close();
    } catch (Exception e) {
        e.printStackTrace();
    }
        return Environment.getExternalStorageDirectory()+saveFilePath;
    }
}
