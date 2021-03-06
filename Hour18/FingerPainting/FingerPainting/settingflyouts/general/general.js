﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/settingFlyouts/general/general.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            var ddlBrushSize = document.getElementById("ddlBrushSize");
            ddlBrushSize.value = STYWin.Settings.brushSize;
            ddlBrushSize.onchange = function (evt) {
                STYWin.Settings.brushSize = evt.target.value;
            }

        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />
            /// <param name="viewState" value="Windows.UI.ViewManagement.ApplicationViewState" />
            /// <param name="lastViewState" value="Windows.UI.ViewManagement.ApplicationViewState" />

            // TODO: Respond to changes in viewState.
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        }
    });
})();
