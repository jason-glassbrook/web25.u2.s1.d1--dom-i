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
{
  const part = "nav";
  const data = siteContent[part];

  /// image ///
  document
    .getElementById ("logo-img")
    .setAttribute ("src" , data["img-src"])
  ;

  /// the rest ///
  document
    .querySelectorAll ("header nav a")
    .forEach (
      (elem , i) => {
        elem.append (
          document.createTextNode (data[`nav-item-${i + 1}`])
        );
      }
    )
  ;

  const nav = document.querySelector ("header nav");

  /// ADD CONTENT ///
  nav.insertAdjacentHTML ("afterbegin" , `<a href="#">Hello World</a>`);
  nav.insertAdjacentHTML ("beforeend" , `<a href="original.html">Original</a>`);
  
  /// STYLE CONTENT ///
  nav
    .querySelectorAll (":scope a")
    .forEach(
      (elem , i) => {
        elem.style.color = "Lime";
      }
    )
  ;
  // // :hover doesn't work... I guess because there's nothing being hovered when it runs?
  // nav
  //   .querySelectorAll (":scope a:hover")
  //   .forEach(
  //     (elem , i) => {
  //       elem.style.color = "Magenta";
  //     }
  //   )
  // ;
}
/***************************************
  cta
***************************************/
{
  const part = "cta";
  const data = siteContent[part];

  /// image ///
  document
    .getElementById (`${part}-img`)
    .setAttribute ("src" , data["img-src"])
  ;

  /// the rest ///
  document
    .querySelectorAll (`.${part}-text > *`)
    .forEach (
      (elem , i) => {
        const tag = elem.tagName.toLowerCase ();
        elem.append (
          document.createTextNode (data[tag])
        );
      }
    )
  ;
}
/***************************************
  main-content
***************************************/
{
  const part = "main-content";
  const data = siteContent[part];

  /// image ///
  document
    .getElementById ("middle-img")
    .setAttribute ("src" , data["middle-img-src"])
  ;

  /// sections ///
  {
    const sections = [
      "features",
      "about",
      "services",
      "product",
      "vision"
    ];
    document
      .querySelectorAll (`.${part} .text-content`)
      .forEach (
        (elem , i) => {
          const section = sections[i];
          /// heading ///
          elem
            .querySelector (":scope > h4")
            .append (
              document.createTextNode (data[`${section}-h4`])
            );
          /// paragraph ///
          elem
            .querySelector (":scope > p")
            .append (
              document.createTextNode (data[`${section}-content`])
            );
        }
      )
  }
}
/***************************************
  contact
***************************************/
{
  const part = "contact";
  const data = siteContent[part];

  document
    .querySelector (`.${part} > h4`)
    .append (
      document.createTextNode (data[`${part}-h4`])
      // this should have been called just "h4" -- grrr
    )
  ;

  { /// address ///
    const item = {
      query : `.${part} > p:nth-of-type(1)` ,
      class : "address" , href : "" , text : ""
    };
    item.text = data[item.class];

    const elem = document.querySelector (item.query);
    elem.classList.add (item.class);
    elem.append (document.createTextNode (item.text));
  }

  { /// phone ///
    const item = {
      query : `.${part} > p:nth-of-type(2)` ,
      class : "phone" , href : "" , text : ""
    };
    item.text = data[item.class];
    item.href = `tel:${item.text}`;

    const elem = document.querySelector (item.query);
    elem.classList.add (item.class);
    elem.setAttribute ("href" , item.href);
    elem.append (document.createTextNode (item.text));
  }

  { /// email ///
    const item = {
      query : `.${part} > p:nth-of-type(3)` ,
      class : "email" , href : "" , text : ""
    };
    item.text = data[item.class];
    item.href = `mailto:${item.text}`;

    const elem = document.querySelector (item.query);
    elem.classList.add (item.class);
    elem.setAttribute ("href" , item.href);
    elem.append (document.createTextNode (item.text));
  }
}
/***************************************
  footer
***************************************/
{
  const part = "footer";
  const data = siteContent[part];

  { /// copyright ///
    const item = {
      query : `${part} > p` ,
      class : "copyright" , text : ""
    };
    item.text = data[item.class];
  
    const elem = document.querySelector (item.query);
    elem.classList.add(item.class);
    elem.append (document.createTextNode (item.text));
  }
}
