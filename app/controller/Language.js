﻿/**
 * Authored by Amaya
 */
Ext.define('DoctorsNearMe.controller.Language', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            sideMenu: 'mainmenu',
            detailsView: 'detailsview',
            mapView: 'mapview',
            userProfile: 'userprofile',
            listView: 'listview',
            loginView: 'loginview'
        },
        control: {
            sideMenu: {
                languagechange: "onLanguageChange"
            }

        }
    },

    onLanguageChange: function (newLang, oldLang) {
        var language,prevLanguage;
        switch (newLang) {
            case 'en': language = EN;
                break;
            case 'si': language = SI;
                break;
        }

        switch (oldLang) {
            case 'en': prevLanguage = EN;
                break;
            case 'si': prevLanguage = SI;
                break;
        }

        DoctorsNearMe.config.setLanguage(language);

        this.getSideMenu().setLanguage();

        var detailsview = this.getDetailsView();

        if(detailsview!=null){
            detailsview.setLanguage();
           // detailsview.refreshTemplate();
        }

        var loginview = this.getLoginView();

        if (loginview != null) {
            loginview.setLanguage();
        }
        
        if (prevLanguage != null) {
            prevLanguage = language;
        }

        var mapview = this.getMapView();

        if (mapview != null) {
            mapview.setLanguage(language, prevLanguage);
        }

        var listview = this.getListView();

        if (listview != null) {
            listview.setLanguage(language, prevLanguage);

            //to refresh list to refresh template
            listview.fillList();
        }
        

    }

})