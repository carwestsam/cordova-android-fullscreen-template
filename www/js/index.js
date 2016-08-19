/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        window.open = cordova.InAppBrowser.open;

        var infomation = "check List: <br />";

        if ( AndroidFullScreen.isSupported() ) {
            infomation += "FullScreen Support: yes <br />";
        }
        AndroidFullScreen.isImmersiveModeSupported(function(){
            infomation+= "Immersive Mode Support: yes <br />";
        }, function(){
            infomation+= "Immersive Mode Support: yes <br />";
        });

function successFunction()
{
    console.info("It worked!");
}

function errorFunction(error)
{
    console.error(error);
}

function trace(value)
{
    console.log(value);
}

function full(){
// Is this plugin supported?
AndroidFullScreen.isSupported();

// Is immersive mode supported?
AndroidFullScreen.isImmersiveModeSupported(successFunction, errorFunction);

// The width of the screen in immersive mode
AndroidFullScreen.immersiveWidth(trace, errorFunction);

// The height of the screen in immersive mode
AndroidFullScreen.immersiveHeight(trace, errorFunction);

// Hide system UI until user interacts
AndroidFullScreen.leanMode(successFunction, errorFunction);

// Show system UI
AndroidFullScreen.showSystemUI(successFunction, errorFunction);

// Extend your app underneath the status bar (Android 4.4+ only)
AndroidFullScreen.showUnderStatusBar(successFunction, errorFunction);

// Extend your app underneath the system UI (Android 4.4+ only)
AndroidFullScreen.showUnderSystemUI(successFunction, errorFunction);

// Hide system UI and keep it hidden (Android 4.4+ only)
AndroidFullScreen.immersiveMode(successFunction, errorFunction);
}

        full();

        cons.innerHTML = infomation;

        function openx(){
            cons.innerHTML = "Jumpping";
            full();
            var ref = cordova.InAppBrowser.open('https://staging-tw-whos-in.herokuapp.com/auth/login', '_self', 'fullscreen=no,location=no,presentationstyle=fullscreen');
            ref.addEventListener('loadstart', full);
            ref.show();
        }

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        // console.log('Received Event: ' + id);
    }
};

app.initialize();