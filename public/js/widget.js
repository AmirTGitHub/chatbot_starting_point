window.FILAMENT = {
  template:
    '<div id="flmntChatbot" class="flmntChatbot">' +
    '<div onclick="FILAMENT.toggleBot();" class="flmntClickElement">' +
    '<div class="oval"><img src="{{root}}img/{{icon}}"></div>' +
    '<h3 class="flmntChatbotTitle">Need some help?</h3>' +
    '<h3 class="flmntChatbotMaximisedTitle">{{preview}}<p>{{subpreview}}</p></h3>' +
    '<div class="Rectangle"><div class="chatnow">Chat Now</div></div>' +
    '<div class="closechat">Close <img src="{{root}}img/close_icon.svg"></div>' +
    "</div>" +
    '<div class="flmntChatNameInput" id="flmntChatNameInput">' +
    '<div class="closechat" onclick="FILAMENT.toggleBot();" >Close <img src="{{root}}img/close_icon.svg"></div>' +
    '<div class="nameInputPadding">' +
    '<div class="iconContainer"><img src="{{root}}img/{{icon}}"></div>' +
    '<div class="textContainer">Hi, I am {{botname}}.<br> {{botintroduction}}</div>' +
    '<div class="nameHeader">What is your name?</div>' +
    '<div class="nameInput"><input onkeyup="FILAMENT.enableButton(event)" class="nameTextInput" id="nameTextInput" placeholder="type your name here" onfocus="this.placeholder = \'\'" onblur="this.placeholder = \'type your name here\'"></div>' +
    '<div class="submitName"><button id="nameTextInputButton" onclick="FILAMENT.saveName()">Start chatting</button></div>' +
    '<div class="textPrivacy">To see how we will use your data please click <a href="{{privacylink}}" target="_blank"> privacy policy</a> </div>' +
    "</div>" +
    "</div>" +
    '<div class="flmntChatIframeContainer">' +
    '<iframe src="" frameborder="0" id="flmntChatIframe" class="flmntChatIframe"></iframe>' +
    "</div>" +
    "</div>",
  widgetCSS: function () {
    var params = window.FILAMENT.widgetParams();
    var css =
      ".flmntChatbot.flmntChatIframe-maximised { bottom: 0px; }" +
      ".flmntChatbot{transition: all 0.7s cubic-bezier(0, 0, 0.24, 1.12) 0s; width: 320px; z-index: 999999; position: fixed; bottom: -528px; right: 24px; height: 600px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 24px; border-radius: 8px 8px 0px 0px;}" +
      ".flmntClickElement{height: 71px; background: rgb({{primarycolour}}); color: #FFFFFF; border-radius: 6px 6px 0px 0px; cursor: pointer;}" +
      ".flmntChatbotTitle, .flmntChatbotMaximisedTitle {width: 227px; height: 32px; position: absolute; top: 10px; left: 70px; font-family: ProximaNovaSemibold; font-size: 16px; font-weight: bold; font-style: normal; font-stretch: normal; line-height: 1.5; letter-spacing: normal; color: #FFFFFF }" +
      ".flmntChatbotMaximisedTitle { font-size: 14px; font-weight: bold; font-style: normal; font-stretch: normal; top: 3px; } " +
      ".flmntChatbotMaximisedTitle p { font-family: ProximaNovaRegular; margin: 0px; font-size: 12px; font-weight: 500; } " +
      ".flmntChatbotMaximisedTitle { display: none; }" +
      ".flmntChatIframeContainer {height: calc(100% - 24px)}" +
      ".flmntChatNameInput { background: rgb({{primarycolour}}); position: absolute; top: 0px; width: 100%; height: 100%; bottom: 0px; border-radius: 6px 6px 0px 0px; color: #ffffff; display: none; } " +
      ".flmntChatNameInput.visible { display: block; }" +
      ".nameInputPadding { padding: 20px; padding-top: 66px; text-align: center; font-family: ProximaNovaRegular; font-size: 16px; font-weight: 500; font-style: normal; font-stretch: normal; line-height: 1.25;}" +
      ".nameInputPadding .iconContainer img { width: 51px; height: 51px; } " +
      ".nameInputPadding .textContainer { margin-top: 16px; }" +
      ".nameInputPadding .textPrivacy { margin-top: 40px; }" +
      ".nameInputPadding .textPrivacy a{ color:white  }" +
      ".nameInputPadding .nameHeader { padding: 16px; }" +
      ".nameInputPadding .nameInput { width: 280px; height: 44px; border-radius: 5px; box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.12); background-image: linear-gradient(to bottom, #fafafa, #f3f4f4); } " +
      ".nameInputPadding .nameInput input { width: 258.4px; height: 25.8px; font-family: ProximaNovaRegular; font-size: 16px; font-weight: 300; background: transparent; border: 0; padding: 10px; outline: 0; text-align: center; font-style: italic; font-stretch: normal; line-height: 1.5; color: #9aa5aa; }" +
      ".nameInputPadding .submitName { padding-top: 16px } " +
      ".nameInputPadding .submitName button { border: 0px; width: 280px; height: 44px; object-fit: contain; opacity: 0.4; border-radius: 6px; background-color: #354a55; font-family: ProximaNovaRegular; font-size: 18px; font-weight: bold; line-height: 1.33; color: #ffffff }" +
      ".nameInputPadding .submitName button.enabled { opacity: 1; background: #0f202e; }" +
      ".flmntChatIframe{width: 100%; height: calc(100% - 47px); }" +
      ".oval { top: 10px; left: 10px; position: absolute;width: 51px; height: 51px;}" +
      ".oval img { width: 100%; }" +
      ".Rectangle {width: 98px;height: 39px;object-fit: contain;border-radius: 6px; background-color: #0f202f; position: absolute; top: 17px; right: 10px;}" +
      ".chatnow { font-family: ProximaNovaSemibold; margin-top: 7px; font-size: 16px; font-weight: bold; font-style: normal; font-stretch: normal; line-height: 1.6; letter-spacing: normal; text-align: center;}" +
      ".closechat { position: absolute; top: 8px; right: 8px; text-transform: uppercase; display: none; font-family: ProximaNovaRegular; font-size: 12px; font-weight: normal; text-align: center; color: #FFFFFF; }" +
      ".flmntChatIframe-maximised .closechat, .flmntChatIframe-maximised .flmntChatbotMaximisedTitle { display: block; }" +
      ".flmntChatIframe-maximised .Rectangle, .flmntChatIframe-maximised .flmntChatbotTitle { display: none; }" +
      "@font-face{" +
      '    font-family:"ProximaNovaRegular";' +
      'src:url("https://cdn.rentokil.com/assets/global/fonts/ProximaNova.eot?#iefix");' +
      'src:url("https://cdn.rentokil.com/assets/global/fonts/ProximaNova.eot?#iefix") format("eot"),' +
      '    url("https://cdn.rentokil.com/assets/global/fonts/ProximaNova.woff2") format("woff2"),' +
      '    url("https://cdn.rentokil.com/assets/global/fonts/ProximaNova.woff") format("woff"),' +
      '    url("https://cdn.rentokil.com/assets/global/fonts/ProximaNova.ttf") format("truetype"),' +
      '    url("https://cdn.rentokil.com/assets/global/fonts/ProximaNova.svg#iefix") format("svg");' +
      "}" +
      "@font-face{" +
      '    font-family:"ProximaNovaSemibold";' +
      '    src:url("https://cdn.rentokil.com/assets/global/fonts/ProximaNovaSemibold.eot?#iefix");' +
      '    src:url("https://cdn.rentokil.com/assets/global/fonts/ProximaNovaSemibold.eot?#iefix") format("eot"),' +
      '    url("https://cdn.rentokil.com/assets/global/fonts/ProximaNovaSemibold.woff2") format("woff2"),' +
      '    url("https://cdn.rentokil.com/assets/global/fonts/ProximaNovaSemibold.woff") format("woff"),' +
      '    url("https://cdn.rentokil.com/assets/global/fonts/ProximaNovaSemibold.ttf") format("truetype"),' +
      '    url("https://cdn.rentokil.com/assets/global/fonts/ProximaNovaSemibold.svg#iefix") format("svg");' +
      "}" +
      "@media only screen and (max-device-width : 640px) { " +
      ".flmntChatbot.flmntChatIframe-maximised { bottom: 0px; }" +
      ".flmntChatbot { width: 100%; right: 0px; height: calc(100%); bottom: calc(-100% + 72px); }" +
      ".flmntChatIframe-maximised .flmntClickElement { border-radius: 0px; }" +
      ".flmntChatPanel { bottom: 0px; left: 0px; right: 0px; top: 0px; height : auto; width: auto; } " +
      ".flmntMobileSpeechBubbleContainer { display: block; opacity: 0; }" +
      ".flmntWelcomeMessage { right: 100px; bottom: 12px; } " +
      ".flmntSpeechBubbleContainer { transform: translate(12px,12px) scale(0.8); } " +
      ".flmntSpeechBubble { transform: translate(24px,24px); } " +
      ".flmntSpeechBubbleClosed { display: none; } " +
      ".flmntSpeechBubbleOpen { display: none; } " +
      "}" +
      "";
    css = css
      .replace(
        /{{primarycolour}}/g,
        params.primarycolour ? params.primarycolour : "#354a54"
      )
      .replace(
        /{{root}}/g,
        params.rootpath || "https://cdn.rentokil.com/assets/global/fonts"
      );
    var head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  },
  enableButton: function (event) {
    var chatbotNameInputButton = document.getElementById("nameTextInputButton");

    var inputText = document.getElementById("nameTextInput").value;
    if (inputText.trim() != "") {
      chatbotNameInputButton.className = " enabled";
    } else {
      chatbotNameInputButton.className = "";
    }

    if (event.keyCode == 13) {
      // enter to submit...
      this.saveName();
      return false;
    }
  },
  saveName: function () {
    var chatbotNameInputButton = document.getElementById("nameTextInputButton");
    var inputText = document.getElementById("nameTextInput").value;
    if (inputText.trim() != "") {
      // save the username...
      window.localStorage.setItem("rentokill-chat-console-username", inputText);

      var chatbot = document.getElementById("flmntChatbot"),
        chatbotIframe = document.getElementById("flmntChatIframe");
      chatbotNameInput = document.getElementById("flmntChatNameInput");

      chatbotNameInput.className = chatbotNameInput.className.replace(
        "visible",
        ""
      );
      this.openChatConsole();
    }
  },
  toggleBot: function () {
    var chatbot = document.getElementById("flmntChatbot"),
      chatbotIframe = document.getElementById("flmntChatIframe");
    chatbotNameInput = document.getElementById("flmntChatNameInput");
    if (chatbotIframe.className.indexOf("flmntChatIframe-maximised") == -1) {
      chatbot.className += " flmntChatIframe-maximised";
      chatbotIframe.className += " flmntChatIframe-maximised";

      // do we have a name for the user ?
      var userName = window.localStorage.getItem(
        "rentokill-chat-console-username"
      );
      if (userName == null) {
        // if no, then show the name input stuff...
        chatbotNameInput.className += " visible";
      } else {
        // if yes, open chat console,
        chatbotNameInput.className = chatbotNameInput.className.replace(
          "visible",
          ""
        );
        this.openChatConsole();
      }
    } else {
      //chatbot.style.bottom = '-528px';
      chatbot.className = chatbot.className.replace(
        "flmntChatIframe-maximised",
        ""
      );
      chatbotIframe.className = chatbotIframe.className.replace(
        "flmntChatIframe-maximised",
        ""
      );
      chatbotNameInput.className = chatbotNameInput.className.replace(
        "visible",
        ""
      );

      window.localStorage.removeItem("rentokill-chat-console-username"); // delete the name info...
    }
  },
  openChatConsole: function () {
    var chatbot = document.getElementById("flmntChatbot"),
      chatbotIframe = document.getElementById("flmntChatIframe");
    chatbotNameInput = document.getElementById("flmntChatNameInput");

    setTimeout(function () {
      chatbotIframe.src = window.FILAMENT.widgetURL(); // this should reload the iframe
      //chatbotIframe.contentWindow.location.reload(true);
    }, 150);
  },
  widgetParams: function () {
    var widgetElems = document.getElementById("flmntWidgetInit"),
      widgetCustomisation = window.FILAMENT.customiseWidget();
    // if (widgetCustomisation.length > 0) {
    //     widgetElems.setAttribute('flmnt-apikey', widgetCustomisation[0]);
    //     if (typeof widgetCustomisation[1] !== 'undefined') {
    //         widgetElems.setAttribute('flmnt-colourise', widgetCustomisation[1]);
    //     }
    // }
    var widgetParams = {};
    for (var i = 0; i < widgetElems.attributes.length; i++) {
      if (widgetElems.attributes[i].name.indexOf("flmnt-") == 0) {
        var param = widgetElems.attributes[i].name.split("flmnt-");
        if (
          param[1] != "rootpath" &&
          param[1] != "preview" &&
          param[1] != "subpreview" &&
          param[1] != "primarycolour" &&
          param[1] != "botname" &&
          param[1] != "privacylink" &&
          param[1] != "botintroduction"
        ) {
          widgetParams[param[1]] = encodeURIComponent(
            widgetElems.attributes[i].value
          );
        } else {
          widgetParams[param[1]] = widgetElems.attributes[i].value;
        }
      }
    }
    return widgetParams;
  },
  widgetURLParams: function (url) {
    if (url.indexOf("?") > 0) {
      var urlParams = url.split("?"),
        urlVars = urlParams[1].split("&"),
        queryString = {};
      for (var i = 0; i < urlVars.length; i++) {
        var pair = urlVars[i].split("="),
          key = decodeURIComponent(pair[0]),
          value = decodeURIComponent(pair[1]);
        queryString[key] = value;
      }
      return queryString;
    } else {
      return;
    }
  },
  widgetURL: function () {
    var documentUrl = window.location.href,
      sessionParams = window.FILAMENT.widgetParams(),
      urlParams = window.FILAMENT.widgetURLParams(documentUrl),
      baseUrl = decodeURIComponent(sessionParams.widgeturl),
      queryString = "?",
      iframeUrl = baseUrl,
      variableParam = "";
    for (var key in urlParams) {
      // combine widget params with URL params
      if (urlParams.hasOwnProperty(key)) {
        sessionParams[key] = urlParams[key];
      }
    }
    for (var sessionParamVar in sessionParams) {
      // remove empty params
      if (
        sessionParams[sessionParamVar] == "undefined" ||
        sessionParams[sessionParamVar].length < 1
      ) {
        delete sessionParams[sessionParamVar];
      }
    }
    for (var variable in sessionParams) {
      // create widget URL query string
      if (
        sessionParams.hasOwnProperty(variable) &&
        sessionParams[variable].length > 0
      ) {
        if (Object.keys(sessionParams).indexOf(variable) > 0) {
          queryString += "&";
        }
        variableParam = sessionParams[variable];
        if (variableParam.length > 0) {
          queryString += variable + "=" + variableParam;
        }
      }
    }
    queryString +=
      "&botusername=" +
      window.localStorage.getItem("rentokill-chat-console-username");
    iframeUrl = baseUrl + queryString;
    return iframeUrl;
  },
  customiseWidget: function () {
    var parentUrl = window.location.href,
      urlSplitArray = parentUrl.split("/"),
      customiseVars = urlSplitArray[urlSplitArray.length - 1],
      varsSplitArray = "";
    if (customiseVars.indexOf("?") !== -1) {
      customiseVars = customiseVars.split("?");
      customiseVars = customiseVars[customiseVars.length - 1];
    }
    if (customiseVars.length > 0) {
      varsSplitArray = customiseVars.split("-");
    }
    return varsSplitArray;
  },
  init: function () {
    window.FILAMENT.widgetCSS();
    var params = window.FILAMENT.widgetParams();
    document.body.insertAdjacentHTML(
      "beforeend",
      window.FILAMENT.template
        .replace(/{{root}}/g, params.rootpath || "./")
        .replace("{{preview}}", params.preview || "Click here to chat.")
        .replace("{{botname}}", params.botname || "Bessie")
        .replace("{{subpreview}}", params.subpreview || "")
        .replace(/{{icon}}/g, params.icon || "")
        .replace("{{privacylink}}", params.privacylink || "")
        .replace("{{botintroduction}}", params.botintroduction || "")
    );

    if (params.popupdelay) {
      setTimeout(function () {
        chatbotIframe = document.getElementById("flmntChatIframe");
        if (
          chatbotIframe.className.indexOf("flmntChatIframe-maximised") == -1
        ) {
          // only toggle it if not already open...
          window.FILAMENT.toggleBot();
        }
      }, params.popupdelay);
    }
  },
};

window.FILAMENT.init();
