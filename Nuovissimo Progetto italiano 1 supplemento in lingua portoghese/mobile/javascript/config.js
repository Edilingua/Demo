	var aliasConfig = {
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
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#F15A22";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.jpg";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="50";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#F15A22";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#000000";bookConfig.formBackgroundColor="#E8E8E8";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Hide";shareObj = [];bookConfig.isInsertFrameLinkEnable=" Hide";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Hide";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Hide";bookConfig.thumbnailColor="#92278F";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Hide";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Hide";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Hide";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="1000";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.DownloadURL="https://www.dropbox.com/s/mealz6vmksel47b/Nuovissimo%20Progetto%20italiano%202%20%C3%A8%20in%20preparazione.pdf?dl=1";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Show";bookConfig.FullscreenButtonVisible="Hide";bookConfig.MagnifierButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="no";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.pageNumberCaption="1:I;2:II;3:III,4:IV;5-16:5+1";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#542338";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=16;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2541;;bookConfig.securityType="1";bookConfig.CreatedTime ="230313150420";bookConfig.bookTitle="Nuovissimo Progetto italiano 1, supplemento in lingua portoghese";bookConfig.bookmarkCR="645fa9909bbf49353402cb4a6b475024abfef80b";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Italian",btnFirstPage:"Prima",btnNextPage:"Pagina Successiva",btnLastPage:"Ultima",btnPrePage:"Pagina Precedente",btnDownload:"Scaricare",btnPrint:"Stampa",btnSearch:"Cerca",btnClearSearch:"Annulla",frmSearchPrompt:"Pulisci il pulsante di ricerca",btnBookMark:"Indice dei contenuti",btnHelp:"Aiuto",btnHome:"Pagina iniziale",btnFullScreen:"Abilita Schermo Intero",btnDisableFullScreen:"Disabilita Schermo Intero",btnSoundOn:"Suono abilitato",btnSoundOff:"Suono disabilitato",btnShareEmail:"Condividi",btnSocialShare:"Condividi sui Social ",btnZoomIn:"Zoom +",btnZoomOut:"Zoom -",btnDragToMove:"Modalità Drag move",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Ferma Auto Flip",btnGoToHome:"Torna alla Home page",frmHelpCaption:"Aiuto",frmHelpTip1:"Aiuto",frmHelpTip2:"Aiuto",frmPrintCaption:"Stampa",frmPrintBtnCaption:"Stampa",frmPrintPrintAll:"Stampa Tutte le Pagine",frmPrintPrintCurrentPage:"Stampa la Pagina Corrente",frmPrintPrintRange:"Stampa un Intervallo",frmPrintExampleCaption:"Esempio: 2,5,8-26",frmPrintPreparePage:"Sto preparando la pagina:",frmPrintPrintFailed:"Stampa Fallita:",pnlSearchInputInvalid:"(Lunghezza minima richiesta è 3 simboli)",loginCaption:"Login",loginInvalidPassword:"Password non valida!",loginPasswordLabel:"Password:",loginBtnLogin:"Accesso",loginBtnCancel:"Annulla",btnThumb:"Anteprima",lblPages:"Pagine:",lblPagesFound:"Pagine:",lblPageIndex:"Pagina",btnAbout:"Su di noi",frnAboutCaption:"Chi siamo",btnSinglePage:"Pagina Singola",btnDoublePage:"Pagina Doppia",btnSwicthLanguage:"Scegli la Lingua",tipChangeLanguage:"Seleziona una lingua",btnMoreOptionsLeft:"Più opzioni",btnMoreOptionsRight:"Più opzioni",btnFit:"Aggiusta finestra",smallModeCaption:"Clicca per vedere a schermo intero",btnAddAnnotation:"Aggiungi Note",btnAnnotation:"Nota",FlipPageEditor_SaveAndExit:"Salva e Esci",FlipPageEditor_Exit:"Esci",DrawToolWindow_Redo:"Rifare",DrawToolWindow_Undo:"Annulla",DrawToolWindow_Clear:"Cancella",DrawToolWindow_Brush:"Spazzola",DrawToolWindow_Width:"Larghezza",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Colore",DrawToolWindow_Eraser:"Gomma",DrawToolWindow_Rectangular:"Rettangolare",DrawToolWindow_Ellipse:"Ellisse",TStuff_BorderWidth:"Bordo Larghezza",TStuff_BorderAlph:"Bordo Alpha",TStuff_BorderColor:"Colore Testo",DrawToolWindow_TextNote:"Nota Testo",AnnotMark:"Segnalibro",lastpagebtnHelp:"Ultima pagina",firstpagebtnHelp:"Prima pagina",homebtnHelp:"Ritorna alla Home page",aboubtnHelp:"Su di noi",screenbtnHelp:"Aprire l'applicazione in modalità schermo intero",helpbtnHelp:"Mostra aiuto",searchbtnHelp:"Ricerca da pagine",pagesbtnHelp:"Guarda la miniatura di questa brochure",bookmarkbtnHelp:"Aprire Segnalibro",AnnotmarkbtnHelp:"Aprire Indice dei contenuti",printbtnHelp:"Stampa la brochure",soundbtnHelp:"Attiva o disattiva audio",sharebtnHelp:"Invia email a",socialSharebtnHelp:"Condivisione sociale",zoominbtnHelp:"Zoom +",downloadbtnHelp:"Scarica questa brochure",pagemodlebtnHelp:"Cambia modalità Pagina singola e doppia",languagebtnHelp:"Cambia Lingua",annotationbtnHelp:"Aggiungi Nota",addbookmarkbtnHelp:"Aggiungi Segnalibro ",removebookmarkbtnHelp:"Rimuovi dai Segnalibri",updatebookmarkbtnHelp:"Aggiorna Segnalibro ",btnShoppingCart:"Carrello",Help_ShoppingCartbtn:"Carrello",Help_btnNextPage:"Prossima pagina",Help_btnPrePage:"Pagina precedente",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Ferma Auto Flip",btnaddbookmark:"Aggiungi",btndeletebookmark:"Cancella",btnupdatebookmark:"Aggiorna",frmyourbookmarks:"I tuoi Segnalibri",frmitems:"articoli",DownloadFullPublication:"Pubblicazione completa",DownloadCurrentPage:"Pagina attuale",DownloadAttachedFiles:"File allegati",lblLink:"condividi",btnCopy:"Copia",infCopyToClipboard:"Il tuo browser non supporta gli appunti.",restorePage:"Vuoi ripristinare la sessione precedente?",tmpl_Backgoundsoundon:"Suono background Attivo",tmpl_Backgoundsoundoff:"Suono background Disattivo",tmpl_Flipsoundon:"Suono Flip Attivo",tmpl_Flipsoundoff:"Suono Flip Disattivo",Help_PageIndex:"Numero della pagina attuale",tmpl_PrintPageRanges:"INTERVALLO PAGINE",tmpl_PrintPreview:"ANTEPRIMA",btnSelection:"Seleziona Testo",loginNameLabel:"Nome:",btnGotoPage:"Vai",btnSettings:"Impostazioni",soundSettingTitle:"Impostazioni Suono",closeFlipSound:"Chiudi Suono Flip",closeBackgroundSound:"Chiudi Suono Background",frmShareCaption:"Condividi",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copia",frmShareItemsGroupCaption:"Condivisione sociale",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"Vai alla pagina",btnPageBack:"Indietro",btnPageForward:"Avanti",SelectTextCopy:"Copia Testo",selectCopyButton:"Copia",TStuffCart_TypeCart:"Carrello",TStuffCart_DetailedQuantity:"Quantità",TStuffCart_DetailedPrice:"Prezzo",ShappingCart_Close:"Chiudi",ShappingCart_CheckOut:"Check-Out",ShappingCart_Item:"Articolo",ShappingCart_Total:"Totale",ShappingCart_AddCart:"Aggiungi al carrello",ShappingCart_InStock:"Disponibile",TStuffCart_DetailedCost:"Costo di trasporto",TStuffCart_DetailedTime:"Tempi di consegna",TStuffCart_DetailedDay:"giorno/i",ShappingCart_NotStock:"Lo stock non è abbastanza",btnCrop:"Ritaglia",btnDragButton:"Trascina",btnFlipBook:"Flip Book",btnSlideMode:"Modalità Slide",btnSinglePageMode:"Modalità Pagina Singola",btnVertical:"Modalità Verticale",btnHotizontal:"Modalità Orizzontale",btnClose:"Chiudi",btnDoublePage:"Pagina Doppia",btnBookStatus:"Vista Libro",checkBoxInsert:"Inserisci Pagina attuale",lblLast:"Questa è l'ultima pagina.",lblFirst:"Questa è la prima pagina.",lblFullscreen:"Clicca per vedere a schermo intero",lblName:"Nome",lblPassword:"Password",lblLogin:"Accesso",lblCancel:"Annulla",lblNoName:"Il campo nome deve essere completato",lblNoPassword:"Il campo password deve essere completato",lblNoCorrectLogin:"Inserire un nome e una password corretti",btnVideo:"VideoGallery",btnSlideShow:"SlideShow",pnlSearchInputInvalid:"(Lunghezza minima richiesta è 3 simboli)",btnDragToMove:"Modalità Drag move",btnPositionToMove:"Muovi alla posizione del mouse",lblHelp1:"Trascina l'angolo della pagina",lblHelp2:"Doppio click per Zoom + o -",lblCopy:"Copia",lblAddToPage:"aggiungi a pagina",lblPage:"Pagina",lblTitle:"Titolo",lblEdit:"Modifica",lblDelete:"Cancella",lblRemoveAll:"Rimuovi tutti",tltCursor:"cursore",tltAddHighlight:"aggiungi evidenziatore",tltAddTexts:"aggiungi testi",tltAddShapes:"aggiungi forme",tltAddNotes:"aggiungi note",tltAddImageFile:"aggiungi file immagine",tltAddSignature:"aggiungi firma",tltAddLine:"aggiungi riga",tltAddArrow:"aggiungi freccia",tltAddRect:"aggiungi rettangolo",tltAddEllipse:"aggiungi ellisse",lblDoubleClickToZoomIn:"Doppio click per zoom +",frmShareCaption:"Condividi",frmShareLabel:"Condividi",frmShareInfo:"Puoi condividere questo documento sui social network cliccando il pulsante qui sotto.",frminsertLabel:"Aggiungi al sito",frminsertInfo:"Usa il codice sotto per incorporare il documento al tuo sito.",btnQRCode:"Clicca qui per scannerizzare codice QR",btnRotateLeft:"Ruota a sinistra",btnRotateRight:"Ruota a destra",lblSelectMode:"Seleziona la modalità di visualizzazione per favore.",frmDownloadPreview:"Anteprima",frmHowToUse:"Modulo \"Come utilizzare\"",lblHelpPage1:"Spostare il dito per far scorrere la pagina del libro.",lblHelpPage2:"Ingrandire utilizzando il gesto o fare doppio clic sulla pagina.",lblHelpPage3:"Fai clic per visualizzare la tabella dei contenuti, i segnalibri e condividi i tuoi libri con i social networks.",lblHelpPage4:"Aggiungi i segnalibri, utilizza la funzione di ricerca e sfoglia automaticamente il libro.",lblHelpPage5:"Apri le miniature per visualizzare tutte le pagine del libro.",TTActionQuiz_PlayAgain:"Vuoi riprodurre di nuovo?",TTActionQuiz_Ration:"Il tuo rapporto è",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",frmBookMark:"Segnalibri",btnFullscreen:"Schermo intero",btnMore:"Di più",frmPrintall:"Stampa tutte le pagine",frmPrintcurrent:"Stampa Pagina corrente",frmPrintRange:"Intervallo di stampa",frmPrintexample:"Esempio: 2,3,5-10",frmPrintbtn:"Stampa",frmaboutcaption:"Contatto",frmaboutcontactinformation:"Informazioni di contatto",frmaboutADDRESS:"Indirizzo",frmaboutEMAIL:"Email",frmaboutWEBSITE:"Sito Web",frmaboutMOBILE:"Cellulare",frmaboutAUTHOR:"Autore",frmaboutDESCRIPTION:"Descrizone",frmSearch:"Ricerca",frmToc:"Indice dei Contenuti",btnTableOfContent:"Mostra Indice dei Contenuti",lblDescription:"Titolo",frmLinkLabel:"collegamento",frmQrcodeCaption:"Eseguire la scansione del codice bidimensionale in basso per visualizzare con il telefono cellulare."},{ language : "Portuguese",btnFirstPage:"Primeira página",btnNextPage:"Página seguinte",btnLastPage:"Última página",btnPrePage:"Página anterior",btnDownload:"Transferir",btnPrint:"Imprimir",btnSearch:"Buscar",btnClearSearch:"Limpar",frmSearchPrompt:"Clear",btnBookMark:"Índice",btnHelp:"Ajuda",btnHome:"Home",btnFullScreen:"Ativar tela cheia",btnDisableFullScreen:"Desativar tela cheia",btnSoundOn:"Som ligado",btnSoundOff:"Som desligado",btnShareEmail:"Compartilhar",btnSocialShare:"Compartilhar",btnZoomIn:"Ampliar",btnZoomOut:"Reduzir",btnDragToMove:"Mover ao arrastar o mouse",btnAutoFlip:"Virar automaticamente",btnStopAutoFlip:"Parar de virar automaticamente",btnGoToHome:"Voltar ao começo",frmHelpCaption:"Ajuda",frmHelpTip1:"Duplo clique para ampliar ou reduzir",frmHelpTip2:"Arrastar o canto da página para visualizar",frmPrintCaption:"Imprimir",frmPrintBtnCaption:"Imprimir",frmPrintPrintAll:"Imprimir todas as páginas",frmPrintPrintCurrentPage:"Imprimir página atual",frmPrintPrintRange:"Intervalo de páginas",frmPrintExampleCaption:"Ex.: 2,5,8-26",frmPrintPreparePage:"Preparando páginas:",frmPrintPrintFailed:"Erro ao Imprimir:",pnlSearchInputInvalid:"O texto de busca é muito pequeno.",loginCaption:"Iniciar sessão",loginInvalidPassword:"Senha incorreta",loginPasswordLabel:"Senha:",loginBtnLogin:"Ingressar",loginBtnCancel:"Cancelar",btnThumb:"Miniaturas",lblPages:"Páginas:",lblPagesFound:"Páginas:",lblPageIndex:"Página",btnAbout:"Sobre",frnAboutCaption:"Sobre e contato",btnSinglePage:"Página simples",btnDoublePage:"Página dupla",btnSwicthLanguage:"Alterar idioma",tipChangeLanguage:"Selecione um idioma abaixo...",btnMoreOptionsLeft:"Mais opções",btnMoreOptionsRight:"Mais opções",btnFit:"Ajustar à janela",smallModeCaption:"Clique para visualizar em tela cheia",btnAddAnnotation:"Adicionar anotações",btnAnnotation:"Anotações",FlipPageEditor_SaveAndExit:"Salvar e sair",FlipPageEditor_Exit:"Sair",DrawToolWindow_Redo:"Refazer",DrawToolWindow_Undo:"Desfazer",DrawToolWindow_Clear:"Limpar",DrawToolWindow_Brush:"Pincel",DrawToolWindow_Width:"Largura",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Cor",DrawToolWindow_Eraser:"Borracha",DrawToolWindow_Rectangular:"Retângulo",DrawToolWindow_Ellipse:"Elipse",TStuff_BorderWidth:"Largura da borda",TStuff_BorderAlph:"Transparência da borda",TStuff_BorderColor:"Cor da borda",DrawToolWindow_TextNote:"Nota de texto",AnnotMark:"Marcador de livro",lastpagebtnHelp:"Última página",firstpagebtnHelp:"Primeira página",homebtnHelp:"Retornar à página inicial",aboubtnHelp:"Sobre",screenbtnHelp:"Abrir este aplicativo no modo de tela cheia",helpbtnHelp:"Mostrar Ajuda",searchbtnHelp:"Busca de páginas",pagesbtnHelp:"Dê uma olhada na miniatura deste livreto",bookmarkbtnHelp:"Abrir marcador",AnnotmarkbtnHelp:"Abrir índice",printbtnHelp:"Imprimir o livreto",soundbtnHelp:"Ligar ou desligar o som",sharebtnHelp:"Enviar por e-mail",socialSharebtnHelp:"Compartilhar",zoominbtnHelp:"Ampliar",downloadbtnHelp:"Transferir este livreto",pagemodlebtnHelp:"Alternar modo de página simples e dupla",languagebtnHelp:"Aternar idioma",annotationbtnHelp:"Adicionar anotação",addbookmarkbtnHelp:"Adicionar marcador",removebookmarkbtnHelp:"Remover marcador",updatebookmarkbtnHelp:"Atualizar marcador",btnShoppingCart:"Carrinho de compra",Help_ShoppingCartbtn:"Carrinho de compra",Help_btnNextPage:"Página seguinte",Help_btnPrePage:"Página anterior",Help_btnAutoFlip:"Virar automaticamente",Help_StopAutoFlip:"Parar de virar automaticamente",btnaddbookmark:"Adicionar",btndeletebookmark:"Apagar",btnupdatebookmark:"Atualizar",frmyourbookmarks:"Seus marcadores",frmitems:"itens",DownloadFullPublication:"Publicação completa",DownloadCurrentPage:"Página atual",DownloadAttachedFiles:"Arquivos anexos",lblLink:"Etiqueta do link para compartilhar",btnCopy:"Botão copiar",infCopyToClipboard:"Your browser does not support clipboard.",restorePage:"Você gostaria de restaurar a sessão anterior?",tmpl_Backgoundsoundon:"Ativar som de fundo",tmpl_Backgoundsoundoff:"Desativar som de fundo",tmpl_Flipsoundon:"Ativar som ao virar",tmpl_Flipsoundoff:"Desativar som ao virar",Help_PageIndex:"Número de página atual",tmpl_PrintPageRanges:"INTERVALOS DE PÁGINA",tmpl_PrintPreview:"VISUALIZAÇÃO",btnSelection:"Selecionar texto",loginNameLabel:"Nome:",btnGotoPage:"Ir",btnSettings:"Configurações",soundSettingTitle:"Configurar som",closeFlipSound:"Fechar som ao virar",closeBackgroundSound:"Fechar som de fundo",frmShareCaption:"Compartilhar",frmShareLinkLabel:"ligação:",frmShareBtnCopy:"Copiar",frmShareItemsGroupCaption:"Compartilhar na rede social",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"Ir para página",btnPageBack:"Anterior",btnPageForward:"Seguinte",SelectTextCopy:"Copiar texto",selectCopyButton:"Copiar",TStuffCart_TypeCart:"Carrinho de compras",TStuffCart_DetailedQuantity:"Quantidade",TStuffCart_DetailedPrice:"Preço",ShappingCart_Close:"Fechar",ShappingCart_CheckOut:"Verificar",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Adicionar ao carrinho",ShappingCart_InStock:"Em estoque",TStuffCart_DetailedCost:"Custo de frete",TStuffCart_DetailedTime:"Tempo de entrega",TStuffCart_DetailedDay:"dia(s)",ShappingCart_NotStock:"Não o suficiente em estoque",btnCrop:"Cortar",btnDragButton:"Arrastar",btnFlipBook:"Virar livro",btnSlideMode:"Modo deslizante",btnSinglePageMode:"Modo de página simples",btnVertical:"Modo vertical",btnHotizontal:"Modo horizontal",btnClose:"Fechar",btnDoublePage:"Página dupla",btnBookStatus:"Visualizar livro",checkBoxInsert:"Inserir página atual",lblLast:"Esta é a última página.",lblFirst:"Esta é a primeira página.",lblFullscreen:"Clique para visualizar em tela cheia",lblName:"Nome",lblPassword:"Senha",lblLogin:"Ingressar",lblCancel:"Cancelar",lblNoName:"O nome do usuário não pode estar vazio.",lblNoPassword:"A senha não pode estar vazia.",lblNoCorrectLogin:"Digite corretamente o nome de usuário e senha.",btnVideo:"Galeria de vídeos",btnSlideShow:"Apresentação",pnlSearchInputInvalid:"O texto de busca é muito pequeno.",btnDragToMove:"Mover ao arrastar o mouse",btnPositionToMove:"Mover ao posicionar o mouse",lblHelp1:"Arraste o canto da página para visualizar",lblHelp2:"Duplo clique para ampliar ou reduzir",lblCopy:"Copiar",lblAddToPage:"adicionar à página",lblPage:"Página",lblTitle:"Título",lblEdit:"Editar",lblDelete:"Apagar",lblRemoveAll:"Remover tudo",tltCursor:"cursor",tltAddHighlight:"adicionar realce",tltAddTexts:"adicionar textos",tltAddShapes:"adicionar formas",tltAddNotes:"adicionar notas",tltAddImageFile:"adicionar arquivo de imagem",tltAddSignature:"adicionar assinatura",tltAddLine:"adicionar linha",tltAddArrow:"adicionar seta",tltAddRect:"adicionar retângulo",tltAddEllipse:"adicionar círculo",lblDoubleClickToZoomIn:"Duplo clique para ampliar.",frmShareCaption:"Compartilhar",frmShareLabel:"Compartilhar",frmShareInfo:"Você pode facilmente compartilhar esta publicação nas redes sociais. Basta clicar no botão apropriado abaixo.",frminsertLabel:"Inserir para o site",frminsertInfo:"Use o código abaixo para incorporar esta publicação para o seu site.",btnQRCode:"Clique para ler o código QR",btnRotateLeft:"Vire à esquerda",btnRotateRight:"Vire à direita",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click on the logo to reach the official website of the company.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Switch horizontal and vertical view on mobile devices.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"Report",btnDoubleSinglePage:"Page switch",frmBookMark:"marcador de livros",btnFullscreen:"Ecrã Inteiro",btnExitFullscreen:"Sair da tela inteira",btnMore:"Mais",frmPrintall:"Imprimir todas as páginas",frmPrintcurrent:"Imprimir página atual",frmPrintRange:"Intervalo de impressão",frmPrintexample:"Exemplo: 2,3,5-10",frmPrintbtn:"impressão",frmaboutcaption:"contato",frmaboutcontactinformation:"Informações para contato",frmaboutADDRESS:"ENDEREÇO",frmaboutEMAIL:"EMAIL",frmaboutWEBSITE:"WEBSITE",frmaboutMOBILE:"MOBILE",frmaboutAUTHOR:"AUTOR",frmaboutDESCRIPTION:"DESCRIÇÃO",frmSearch:"Pesquisa",frmToc:"Tabela de Conteúdo",btnTableOfContent:"Mostrar tabela de conteúdo",lblDescription:"Título",frmLinkLabel:"Ligação",frmQrcodeCaption:"Digitalize o código bidimensional inferior para visualizar com o telemóvel."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"2023131224131025","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.580276","y":"0.8545749999999999","width":"0.18471","height":"-0.017554999999999998","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"481.89","pageHeight":"680.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"mailto:redazione@edilingua.it","linkTarget":"Blank"}}],[],[],[],[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"2023131224136047","alpha":"1","overColor":"16737792","downColor":"16737792","outColor":"11184810","overAlpha":"0","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.3806597425719927","y":"0.4221581655277019","width":"0.1298119198972694","height":"0.021368539707668013","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"481.89","pageHeight":"680.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"www.edilingua.it","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"2023131224135785","alpha":"1","overColor":"16737792","downColor":"16737792","outColor":"11184810","overAlpha":"0","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.28339221949403887","y":"0.5607622844497121","width":"0.1298119198972694","height":"0.021368539707668013","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"481.89","pageHeight":"680.32"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"www.edilingua.it","linkTarget":"_blank"}}],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];	
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