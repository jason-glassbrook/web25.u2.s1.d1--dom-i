/***********************************************************
  DATA
***********************************************************/

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

/***********************************************************
  PROJECT
***********************************************************/

/***************************************
  nav
***************************************/

document
  .getElementById ("logo-img")
  .setAttribute ("src" , siteContent["nav"]["img-src"])
;

document
  .querySelectorAll ("header nav a")
  .forEach (
    (elem , i) => {
      elem.append (
        document.createTextNode (siteContent["nav"][`nav-item-${i}`])
      );
    }
  )
;

/***************************************
  cta
***************************************/

document
  .getElementById ("cta-img")
  .setAttribute ("src" , siteContent["cta"]["img-src"])
;

document
  .querySelectorAll (".cta-text > *")
  .forEach (
    (elem , i) => {
      const tag = elem.tagName.toLowerCase ();
      elem.append (
        document.createTextNode (siteContent["cta"][tag])
      );
    }
  )
;

/***************************************
  main-content
***************************************/

/*******************
  top
*******************/

/*******************
  middle
*******************/

document
  .getElementById ("middle-img")
  .setAttribute ("src" , siteContent["main-content"]["middle-img-src"])
;

/*******************
  bottom
*******************/

/***************************************
  contact
***************************************/

document
  .querySelector (".contact > h4")
  .append (
    document.createTextNode (siteContent["contact"]["contact-h4"])
    // this should have been called just "h4" -- grrr
  )
;

{ /// address ///
  const item = {
    query : ".contact > p:nth-of-type(1)" ,
    class : "address" , href : "" , text : ""
  };
  item.text = siteContent["contact"][item.class];

  const elem = document.querySelector (item.query);
  elem.classList.add (item.class);
  elem.append (document.createTextNode (item.text));
}

{ /// phone ///
  const item = {
    query : ".contact > p:nth-of-type(2)" ,
    class : "phone" , href : "" , text : ""
  };
  item.text = siteContent["contact"][item.class];
  item.href = `tel:${item.text}`;

  const elem = document.querySelector (item.query);
  elem.classList.add (item.class);
  elem.setAttribute ("href" , item.href);
  elem.append (document.createTextNode (item.text));
}

{ /// email ///
  const item = {
    query : ".contact > p:nth-of-type(3)" ,
    class : "email" , href : "" , text : ""
  };
  item.text = siteContent["contact"][item.class];
  item.href = `mailto:${item.text}`;

  const elem = document.querySelector (item.query);
  elem.classList.add (item.class);
  elem.setAttribute ("href" , item.href);
  elem.append (document.createTextNode (item.text));
}

/***************************************
  footer
***************************************/

{ /// copyright ///
  const item = {
    query : "footer > p" ,
    class : "copyright" , text : ""
  };
  item.text = siteContent["footer"][item.class];

  const elem = document.querySelector (item.query);
  elem.classList.add(item.class);
  elem.append (document.createTextNode (item.text));
}
