﻿	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionFontSize="20";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#F15A22";bookConfig.loadingPictureHeight="150";bookConfig.showLoadingGif="Yes";bookConfig.loadingDisplayTime="0";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.jpg";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="50";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#F15A22";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.ToolBarVisible="Yes";bookConfig.formFontColor="#000000";bookConfig.formBackgroundColor="#E8E8E8";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Hide";bookConfig.thumbnailColor="#92278F";bookConfig.thumbnailAlpha="70";bookConfig.ThumbnailSize="small";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Hide";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.bgSoundVol="50";bookConfig.AutoPlayButtonVisible="Hide";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Show";bookConfig.DownloadURL="https://www.dropbox.com/s/ehky0of37z4thw6/Progetto%20italiano%20nel%20tempo%20libero_chiavi7-8.pdf?dl=1";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Show";bookConfig.FullscreenButtonVisible="Hide";bookConfig.MagnifierButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.pageHighlightType="magazine";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.phoneFlipShortcutButton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.DoubleSinglePageButtonVisible="hide";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="no";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.pageNumberCaption="1:I;2:II; 3:III; 4:IV; 5:V; 6:VI; 7:5; 8-100:52+1";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.securitySetting="No Security";bookConfig.passwordTips="Please contact the <a href=mailto:author@sample.com><u>author</u></a> to access the web";bookConfig.OnlyOpenInIframe="No";bookConfig.OnlyOpenInIframeInfo="No reading rights";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#844562";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=24;bookConfig.largePageWidth=1200;bookConfig.largePageHeight=1694;;bookConfig.securityType="1";bookConfig.CreatedTime ="230313144104";bookConfig.bookTitle="Progetto italiano nel tempo libero, A1-2";bookConfig.bookmarkCR="561a201d05d61b280b9c1037e7de1af8e0bc73d8";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Italian",btnFirstPage:"Prima",btnNextPage:"Pagina Successiva",btnLastPage:"Ultima",btnPrePage:"Pagina Precedente",btnDownload:"Scarica chiavi",btnPrint:"Stampa",btnSearch:"Cerca",btnClearSearch:"Annulla",frmSearchPrompt:"Pulisci il pulsante di ricerca",btnBookMark:"Indice dei contenuti",btnHelp:"Aiuto",btnHome:"Pagina iniziale",btnFullScreen:"Abilita Schermo Intero",btnDisableFullScreen:"Disabilita Schermo Intero",btnSoundOn:"Suono abilitato",btnSoundOff:"Suono disabilitato",btnShareEmail:"Condividi",btnSocialShare:"Condividi sui Social ",btnZoomIn:"Zoom +",btnZoomOut:"Zoom -",btnDragToMove:"Modalità Drag move",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Ferma Auto Flip",btnGoToHome:"Torna alla Home page",frmHelpCaption:"Aiuto",frmHelpTip1:"Aiuto",frmHelpTip2:"Aiuto",frmPrintCaption:"Stampa",frmPrintBtnCaption:"Stampa",frmPrintPrintAll:"Stampa Tutte le Pagine",frmPrintPrintCurrentPage:"Stampa la Pagina Corrente",frmPrintPrintRange:"Stampa un Intervallo",frmPrintExampleCaption:"Esempio: 2,5,8-26",frmPrintPreparePage:"Sto preparando la pagina:",frmPrintPrintFailed:"Stampa Fallita:",pnlSearchInputInvalid:"(Lunghezza minima richiesta è 3 simboli)",loginCaption:"Login",loginInvalidPassword:"Password non valida!",loginPasswordLabel:"Password:",loginBtnLogin:"Accesso",loginBtnCancel:"Annulla",btnThumb:"Anteprima",lblPages:"Pagine:",lblPagesFound:"Pagine:",lblPageIndex:"Pagina",btnAbout:"Su di noi",frnAboutCaption:"Chi siamo",btnSinglePage:"Pagina Singola",btnDoublePage:"Pagina Doppia",btnSwicthLanguage:"Scegli la Lingua",tipChangeLanguage:"Seleziona una lingua",btnMoreOptionsLeft:"Più opzioni",btnMoreOptionsRight:"Più opzioni",btnFit:"Aggiusta finestra",smallModeCaption:"Clicca per vedere a schermo intero",btnAddAnnotation:"Aggiungi Note",btnAnnotation:"Nota",FlipPageEditor_SaveAndExit:"Salva e Esci",FlipPageEditor_Exit:"Esci",DrawToolWindow_Redo:"Rifare",DrawToolWindow_Undo:"Annulla",DrawToolWindow_Clear:"Cancella",DrawToolWindow_Brush:"Spazzola",DrawToolWindow_Width:"Larghezza",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Colore",DrawToolWindow_Eraser:"Gomma",DrawToolWindow_Rectangular:"Rettangolare",DrawToolWindow_Ellipse:"Ellisse",TStuff_BorderWidth:"Bordo Larghezza",TStuff_BorderAlph:"Bordo Alpha",TStuff_BorderColor:"Colore Testo",DrawToolWindow_TextNote:"Nota Testo",AnnotMark:"Segnalibro",lastpagebtnHelp:"Ultima pagina",firstpagebtnHelp:"Prima pagina",homebtnHelp:"Ritorna alla Home page",aboubtnHelp:"Su di noi",screenbtnHelp:"Aprire l'applicazione in modalità schermo intero",helpbtnHelp:"Mostra aiuto",searchbtnHelp:"Ricerca da pagine",pagesbtnHelp:"Guarda la miniatura di questa brochure",bookmarkbtnHelp:"Aprire Segnalibro",AnnotmarkbtnHelp:"Aprire Indice dei contenuti",printbtnHelp:"Stampa la brochure",soundbtnHelp:"Attiva o disattiva audio",sharebtnHelp:"Invia email a",socialSharebtnHelp:"Condivisione sociale",zoominbtnHelp:"Zoom +",downloadbtnHelp:"Scarica questa brochure",pagemodlebtnHelp:"Cambia modalità Pagina singola e doppia",languagebtnHelp:"Cambia Lingua",annotationbtnHelp:"Aggiungi Nota",addbookmarkbtnHelp:"Aggiungi Segnalibro ",removebookmarkbtnHelp:"Rimuovi dai Segnalibri",updatebookmarkbtnHelp:"Aggiorna Segnalibro ",btnShoppingCart:"Carrello",Help_ShoppingCartbtn:"Carrello",Help_btnNextPage:"Prossima pagina",Help_btnPrePage:"Pagina precedente",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Ferma Auto Flip",btnaddbookmark:"Aggiungi",btndeletebookmark:"Cancella",btnupdatebookmark:"Aggiorna",frmyourbookmarks:"I tuoi Segnalibri",frmitems:"articoli",DownloadFullPublication:"Pubblicazione completa",DownloadCurrentPage:"Pagina attuale",DownloadAttachedFiles:"File allegati",lblLink:"condividi",btnCopy:"Copia",infCopyToClipboard:"Il tuo browser non supporta gli appunti.",restorePage:"Vuoi ripristinare la sessione precedente?",tmpl_Backgoundsoundon:"Suono background Attivo",tmpl_Backgoundsoundoff:"Suono background Disattivo",tmpl_Flipsoundon:"Suono Flip Attivo",tmpl_Flipsoundoff:"Suono Flip Disattivo",Help_PageIndex:"Numero della pagina attuale",tmpl_PrintPageRanges:"INTERVALLO PAGINE",tmpl_PrintPreview:"ANTEPRIMA",btnSelection:"Seleziona Testo",loginNameLabel:"Nome:",btnGotoPage:"Vai",btnSettings:"Impostazioni",soundSettingTitle:"Impostazioni Suono",closeFlipSound:"Chiudi Suono Flip",closeBackgroundSound:"Chiudi Suono Background",frmShareCaption:"Condividi",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copia",frmShareItemsGroupCaption:"Condivisione sociale",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"Vai alla pagina",btnPageBack:"Indietro",btnPageForward:"Avanti",SelectTextCopy:"Copia Testo",selectCopyButton:"Copia",TStuffCart_TypeCart:"Carrello",TStuffCart_DetailedQuantity:"Quantità",TStuffCart_DetailedPrice:"Prezzo",ShappingCart_Close:"Chiudi",ShappingCart_CheckOut:"Check-Out",ShappingCart_Item:"Articolo",ShappingCart_Total:"Totale",ShappingCart_AddCart:"Aggiungi al carrello",ShappingCart_InStock:"Disponibile",TStuffCart_DetailedCost:"Costo di trasporto",TStuffCart_DetailedTime:"Tempi di consegna",TStuffCart_DetailedDay:"giorno/i",ShappingCart_NotStock:"Lo stock non è abbastanza",btnCrop:"Ritaglia",btnDragButton:"Trascina",btnFlipBook:"Flip Book",btnSlideMode:"Modalità Slide",btnSinglePageMode:"Modalità Pagina Singola",btnVertical:"Modalità Verticale",btnHotizontal:"Modalità Orizzontale",btnClose:"Chiudi",btnDoublePage:"Pagina Doppia",btnBookStatus:"Vista Libro",checkBoxInsert:"Inserisci Pagina attuale",lblLast:"Questa è l'ultima pagina.",lblFirst:"Questa è la prima pagina.",lblFullscreen:"Clicca per vedere a schermo intero",lblName:"Nome",lblPassword:"Password",lblLogin:"Accesso",lblCancel:"Annulla",lblNoName:"Il campo nome deve essere completato",lblNoPassword:"Il campo password deve essere completato",lblNoCorrectLogin:"Inserire un nome e una password corretti",btnVideo:"VideoGallery",btnSlideShow:"SlideShow",pnlSearchInputInvalid:"(Lunghezza minima richiesta è 3 simboli)",btnDragToMove:"Modalità Drag move",btnPositionToMove:"Muovi alla posizione del mouse",lblHelp1:"Trascina l'angolo della pagina",lblHelp2:"Doppio click per Zoom + o -",lblCopy:"Copia",lblAddToPage:"aggiungi a pagina",lblPage:"Pagina",lblTitle:"Titolo",lblEdit:"Modifica",lblDelete:"Cancella",lblRemoveAll:"Rimuovi tutti",tltCursor:"cursore",tltAddHighlight:"aggiungi evidenziatore",tltAddTexts:"aggiungi testi",tltAddShapes:"aggiungi forme",tltAddNotes:"aggiungi note",tltAddImageFile:"aggiungi file immagine",tltAddSignature:"aggiungi firma",tltAddLine:"aggiungi riga",tltAddArrow:"aggiungi freccia",tltAddRect:"aggiungi rettangolo",tltAddEllipse:"aggiungi ellisse",lblDoubleClickToZoomIn:"Doppio click per zoom +",frmShareCaption:"Condividi",frmShareLabel:"Condividi",frmShareInfo:"Puoi condividere questo documento sui social network cliccando il pulsante qui sotto.",frminsertLabel:"Aggiungi al sito",frminsertInfo:"Usa il codice sotto per incorporare il documento al tuo sito.",btnQRCode:"Clicca qui per scannerizzare codice QR",btnRotateLeft:"Ruota a sinistra",btnRotateRight:"Ruota a destra",lblSelectMode:"Seleziona la modalità di visualizzazione per favore.",frmDownloadPreview:"Anteprima",frmDownload:"Download",frmHowToUse:"Modulo \"Come utilizzare\"",lblHelpPage1:"Spostare il dito per far scorrere la pagina del libro.",lblHelpPage2:"Ingrandire utilizzando il gesto o fare doppio clic sulla pagina.",lblHelpPage3:"Fai clic per visualizzare la tabella dei contenuti, i segnalibri e condividi i tuoi libri con i social networks.",lblHelpPage4:"Aggiungi i segnalibri, utilizza la funzione di ricerca e sfoglia automaticamente il libro.",lblHelpPage5:"Apri le miniature per visualizzare tutte le pagine del libro.",TTActionQuiz_PlayAgain:"Vuoi riprodurre di nuovo?",TTActionQuiz_Ration:"Il tuo rapporto è",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Seleziona testo",btnNote:"Annotazioni",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Lente d'ingrandimento",btnMagnifierOut:"Lente d'ingrandimento",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",btnDownloadPosterPrompt:"Click to download the poster",infLongPressToSavePoster:"Press and hold the mobile terminal to save the poster",infLongPressToIndentify:"Long press to identify QR code",infScanCodeToView:"Scan code to read",frmaboutcaption:"Contact",frmaboutDESCRIPTION:"Description",frmaboutAUTHOR:"Author",frmaboutADDRESS:"Address",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",infDeleteNote:"Do you want to delete the note?",proFullScreenWarn:"Current browser does not support full-screen,Please use Chrome for best results",btnBack:"Backs",frmVideoListTitle:"Video list",frmVideoTitle:"Video",lblConfirm:"Confirm",frmBookMark:"Segnalibri",btnFullscreen:"Schermo intero",btnMore:"Di più",frmPrintall:"Stampa tutte le pagine",frmPrintcurrent:"Stampa Pagina corrente",frmPrintRange:"Intervallo di stampa",frmPrintexample:"Esempio: 2,3,5-10",frmPrintbtn:"Stampa",frmaboutcontactinformation:"Informazioni di contatto",frmSearch:"Ricerca",frmToc:"Indice dei Contenuti",btnTableOfContent:"Mostra Indice dei Contenuti",lblDescription:"Titolo",frmLinkLabel:"collegamento",frmQrcodeCaption:"Eseguire la scansione del codice bidimensionale in basso per visualizzare con il telefono cellulare."},{ language : "Greek",btnFirstPage:"Πρώτη",btnNextPage:"Επόμενη σελίδα",btnLastPage:"Τελευταία",btnPrePage:"Προηγούμενη σελίδα",btnDownload:"Λήψη",btnPrint:"Εκτύπωση",btnSearch:"Αναζήτηση",btnClearSearch:"Καθαρίζω",frmSearchPrompt:"Clear",btnBookMark:"Πίνακας περιεχομένων",btnHelp:"Βοήθεια",btnHome:"Home",btnFullScreen:"Πλήρης οθόνη",btnDisableFullScreen:"Απενεργοποίηση πλήρους οθόνης",btnSoundOn:"Με ήχο",btnSoundOff:"Χωρίς ήχο",btnShareEmail:"Μοιράσου",btnSocialShare:"Μοιράσου",btnZoomIn:"Μεγέθυνση",btnZoomOut:"Σμίκρυνση",btnDragToMove:"Λειτουργία συρόμενης κίνησης",btnAutoFlip:"Παρουσίαση",btnStopAutoFlip:"Τέλος παρουσίασης",btnGoToHome:"Αρχική Σελίδα",frmHelpCaption:"Βοήθεια",frmHelpTip1:"Διπλό κλικ για να αλλάξετε το μέγεθος",frmHelpTip2:"Σύρετε την άκρη της σελίδας για προβολή",frmPrintCaption:"Παράθυρο Εκτύπωση Περιγραφή",frmPrintBtnCaption:"Εκτύπωση",frmPrintPrintAll:"Εκτύπωση όλων",frmPrintPrintCurrentPage:"Εκτύπωση τρέχουσας σελίδας",frmPrintPrintRange:"Σελίδες από , έως",frmPrintExampleCaption:"Παράδειγμα: 2,5,8-26",frmPrintPreparePage:"Προετοιμασία σελίδας:",frmPrintPrintFailed:"Αποτυχία εκτύπωσης:",pnlSearchInputInvalid:"Το κείμενο αναζήτησης είναι πολύ μικρό.",loginCaption:"Είσοδος",loginInvalidPassword:"Μη έγκυρος κωδικός πρόσβασης!",loginPasswordLabel:"Κωδικός πρόσβασης:",loginBtnLogin:"Είσοδος",loginBtnCancel:"Ακύρωση",btnThumb:"Μικρογραφίες",lblPages:"Σελίδες:",lblPagesFound:"Σελίδες:",lblPageIndex:"Σελίδες",btnAbout:"Σχετικά",frnAboutCaption:"Σχετικά & Επικοινωνία",btnSinglePage:"Μία σελίδα",btnDoublePage:"Σαλόνι",btnSwicthLanguage:"Αλλαγή γλώσσας",tipChangeLanguage:"Επιλέξτε μια γλώσσα παρακάτω ...",btnMoreOptionsLeft:"περισσότερες επιλογές",btnMoreOptionsRight:"περισσότερες επιλογές",btnFit:"Προσαρμογή στο παράθυρο",smallModeCaption:"Κάντε κλικ για να δείτε σε πλήρη οθόνη",btnAddAnnotation:"Προσθήκη σχολίων",btnAnnotation:"Οι σχολιασμοί",FlipPageEditor_SaveAndExit:"Αποθήκευση και Έξοδος",FlipPageEditor_Exit:"έξοδος",DrawToolWindow_Redo:"ξανακάνω",DrawToolWindow_Undo:"Αναίρεση",DrawToolWindow_Clear:"καθαρισμός",DrawToolWindow_Brush:"βούρτσα",DrawToolWindow_Width:"Πλάτος",DrawToolWindow_Alpha:"Alpha",DrawToolWindow_Color:"Χρώμα",DrawToolWindow_Eraser:"γόμα",DrawToolWindow_Rectangular:"ορθογώνιος",DrawToolWindow_Ellipse:"έλλειψη",TStuff_BorderWidth:"Πλαίσιο Πάχος",TStuff_BorderAlph:"Πλαίσιο Alpha",TStuff_BorderColor:"Πλαίσιο Χρώμα",DrawToolWindow_TextNote:"σημείωση κειμένου",AnnotMark:"σελιδοδείκτης",lastpagebtnHelp:"Τελευταία σελίδα",firstpagebtnHelp:"Πρώτη σελίδα",homebtnHelp:"Επιστροφή στην αρχική σελίδα",aboubtnHelp:"Περίπου",screenbtnHelp:"Ανοίξτε αυτή την εφαρμογή σε λειτουργία πλήρους οθόνης",helpbtnHelp:"Εμφάνιση βοήθειας",searchbtnHelp:"Αναζήτηση από τις σελίδες",pagesbtnHelp:"δείτε τη μικρογραφία",bookmarkbtnHelp:"Άνοιγμα σελιδοδείκτη",AnnotmarkbtnHelp:"Ανοίγω Πίνακα περιεχομένων",printbtnHelp:"Εκτυπώστε το φυλλάδιο",soundbtnHelp:"Ενεργοποίηση ή απενεργοποίηση του ήχου",sharebtnHelp:"Αποστολή Email σε",socialSharebtnHelp:"Μοιράσου",zoominbtnHelp:"Ζουμ",downloadbtnHelp:"Κατεβάστε αυτό το φυλλάδιο",pagemodlebtnHelp:"Εναλλαγή μονής και διπλής λειτουργίας της σελίδας",languagebtnHelp:"Αλλαγή γλώσσας",annotationbtnHelp:"Προσθήκη σχολιασμού",addbookmarkbtnHelp:"Προσθήκη σελιδοδείκτη",removebookmarkbtnHelp:"Αφαίρεση σελιδοδείκτη",updatebookmarkbtnHelp:"Ενημέρωση σελιδοδείκτη",btnShoppingCart:"Καλάθι αγορών",Help_ShoppingCartbtn:"Βοήθεια για Καλάθι αγορών",Help_btnNextPage:"Επόμενη σελίδα",Help_btnPrePage:"Προηγούμενη σελίδα",Help_btnAutoFlip:"Αυτόματο γύρισμα",Help_StopAutoFlip:"Σταμάτησε αυτόματο γύρισμα",btnaddbookmark:"Προσθήκη",btndeletebookmark:"Διαγραφή",btnupdatebookmark:"Ενημέρωση",frmyourbookmarks:"Οι σελιδοδείκτες σας",frmitems:"Αντικείμενα",DownloadFullPublication:"Πλήρης δημοσίευση",DownloadCurrentPage:"Τρέχουσα σελίδα",DownloadAttachedFiles:"Επισυναπτόμενα αρχεία",lblLink:"Σύνδεσμος",btnCopy:"Κουμπί αντιγραφής",infCopyToClipboard:"Your browser does not support clipboard.",restorePage:"Θα θέλατε να επαναφέρετε την προηγούμενη συνεδρία;",tmpl_Backgoundsoundon:"Ήχοι φόντου, Ναι",tmpl_Backgoundsoundoff:"Ήχοι φόντου, Όχι",tmpl_Flipsoundon:"Ήχος ξεφυλλίσματος, Ναι",tmpl_Flipsoundoff:"Ήχος ξεφυλλίσματος, Όχι",Help_PageIndex:"Αριθμός τέχουσας σελίδας",tmpl_PrintPageRanges:"Εύρος σελίδων",tmpl_PrintPreview:"Προεπισκόπηση",btnSelection:"Επιλογή κειμένου",loginNameLabel:"Όνομα:",btnGotoPage:"Πήγαινε",btnSettings:"Ρυθμίσεις",soundSettingTitle:"Ρύθμιση ήχου",closeFlipSound:"Κλείσε ήχο ξεφυλλίσματος",closeBackgroundSound:"Κλείσε ήχο φόντου",frmShareCaption:"Μοιράσου",frmShareLinkLabel:"Σύνδεσμος:",frmShareBtnCopy:"Αντιγραφή",frmShareItemsGroupCaption:"Μοιράσου",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"Πήγαινε στη σελίδα",btnPageBack:"Πίσω",btnPageForward:"Μπρος",SelectTextCopy:"Αντιγραφή κειμένου",selectCopyButton:"Αντιγραφή",TStuffCart_TypeCart:"Καλάθι αγορών",TStuffCart_DetailedQuantity:"Ποσότητα",TStuffCart_DetailedPrice:"Τιμή",ShappingCart_Close:"Κλείσιμο",ShappingCart_CheckOut:"Ολοκλήρωση αγορών",ShappingCart_Item:"Αντικείμενο",ShappingCart_Total:"Σύνολο",ShappingCart_AddCart:"Προσθήκη αντικειμένου στο καλάθι",ShappingCart_InStock:"Σε απόθεμα",TStuffCart_DetailedCost:"Κόστος μεταφορικών",TStuffCart_DetailedTime:"Χρόνος παράδοσης",TStuffCart_DetailedDay:"Ημέρα(ες)",ShappingCart_NotStock:"Χωρίς αρκετό απόθεμα",btnCrop:"Αποκοπή",btnDragButton:"Σύρσιμο",btnFlipBook:"Ηλεκτρονικό Βιβλίο",btnSlideMode:"Επιλογή ολίσθισης",btnSinglePageMode:"Επιλογή μονής σελίδας",btnVertical:"Επιλογή κατακόρυφο",btnHotizontal:"Επιλογή οριζόντιο",btnClose:"Κλείσιμο",btnDoublePage:"Σαλόνι",btnBookStatus:"Όψη βιβλίου",checkBoxInsert:"Εισαγωγή τρέχουσας σελίδας",lblLast:"Αυτή είναι η τελευταία σελίδα.",lblFirst:"Αυτή είναι η πρώτη σελίδα.",lblFullscreen:"Πατήστε για όψη πλήρους οθόνης",lblName:"Όνομα",lblPassword:"Κωδικός",lblLogin:"Σύνδεση",lblCancel:"Άκυρο",lblNoName:"Το όνομα δεν μπορεί να είναι κενό.",lblNoPassword:"Ο κωδικός δεν μπορεί να είναι κενός.",lblNoCorrectLogin:"Παρακαλώ εισάγετε το σωστό όνομα και κωδικό.",btnVideo:"Βίντεο Γκάλερι",btnSlideShow:"Συνεχόμενη εναλλαγή εικόνων",pnlSearchInputInvalid:"Το κείμενο αναζήτησης είναι πολύ μικρό.",btnDragToMove:"Λειτουργία συρόμενης κίνησης",btnPositionToMove:"Κίνηση ανάλογη της θέσης του ποντικιού",lblHelp1:"Σύρετε τη γωνία της σελίδας για να δείτε",lblHelp2:"Διπλό κλικ για μεγέθυνση, σμίκρυνση",lblCopy:"Αντιγραφή",lblAddToPage:"πρόσθεσε στη σελίδα",lblPage:"Σελίδα",lblTitle:"Τίτλος",lblEdit:"Επεξεργασία",lblDelete:"Διαγραφή",lblRemoveAll:"Απαλοιφή όλων",tltCursor:"δρομέας",tltAddHighlight:"προσθήκη έμφασης",tltAddTexts:"προσθήκη κειμένων",tltAddShapes:"προσθήκη σχημάτων",tltAddNotes:"προσθήκη σημειώσεων",tltAddImageFile:"προσθήκη αρχείου εικόνας",tltAddSignature:"προσθήκη υπογραφής",tltAddLine:"προσθήκη γραμμής",tltAddArrow:"προσθήκη τόξου",tltAddRect:"προσθήκη τετραγώνου",tltAddEllipse:"προσθήκη έλλειψης",lblDoubleClickToZoomIn:"Διπλό κλικ για μεγέθυνση.",frmShareCaption:"Μοιράσου",frmShareLabel:"Μοιράσου",frmShareInfo:"Μπορείτε εύκολα να μοιραστείτε αυτή τη δημοσίευση στα κοινωνικά δίκτυα. Απλά πατήστε το αντίστοιχο κουμπί παρακάτω.",frminsertLabel:"Εισαγωγή στον ιστότοπο",frminsertInfo:"Χρησιμοποιήστε τον παρακάτω κώδικα για να ενσωματώσετε αυτή τη δημοσίευση στον ιστότοπό σας.",btnQRCode:"Click to scan QR code",btnRotateLeft:"Rotate Left",btnRotateRight:"Rotate Right",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmDownload:"Download",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click on the logo to reach the official website of the company.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Switch horizontal and vertical view on mobile devices.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Επιλογή κειμένου",btnNote:"Εργαλειοθήκη",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Μεγεθυντικός φακός",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",btnDownloadPosterPrompt:"Click to download the poster",infLongPressToSavePoster:"Press and hold the mobile terminal to save the poster",infLongPressToIndentify:"Long press to identify QR code",infScanCodeToView:"Scan code to read",frmaboutcaption:"Contact",frmaboutDESCRIPTION:"Description",frmaboutAUTHOR:"Author",frmaboutADDRESS:"Address",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Website",frmaboutMOBILE:"Mobile",infDeleteNote:"Do you want to delete the note?",proFullScreenWarn:"Current browser does not support full-screen,Please use Chrome for best results",btnBack:"Backs",frmVideoListTitle:"Video list",frmVideoTitle:"Video",lblConfirm:"Confirm",frmBookMark:"Κάντε κράτηση σήμα",btnFullscreen:"Πλήρης οθόνη",btnExitFullscreen:"Έξοδος από πλήρη οθόνη",btnMore:"περισσότερο",frmPrintall:"Εκτύπωση Όλες οι σελίδες",frmPrintcurrent:"Εκτύπωση τρέχουσας σελίδας",frmPrintRange:"Σειρά Εκτύπωση",frmPrintexample:"Παράδειγμα: 2,3,5-10",frmPrintbtn:"αποτύπωμα",frmaboutcontactinformation:"Στοιχεία Επικοινωνίας",frmSearch:"έρευνα",frmToc:"Πίνακας Περιεχομένων",btnTableOfContent:"Εμφάνιση πίνακα περιεχομένου",lblDescription:"Τίτλος",frmLinkLabel:"Σύνδεσμος",frmQrcodeCaption:"Σαρώστε το κάτω μέρος δύο διαστάσεων κώδικα για να δείτε με το κινητό τηλέφωνο."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pages_information =[];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}