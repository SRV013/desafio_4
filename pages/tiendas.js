function storesContainer(params){
    const template = document.querySelector("#porfolio-container-template");
    const container = document.querySelector(".porfolio-content");
    
    template.content.querySelector(".porfolio-card-title").textContent =
    params.title;
    
    template.content.querySelector(".porfolio-card-text").textContent =
    params.direction;
  
    template.content.querySelector(".porfolio-card-text-max").textContent =
    params.description;
  
    template.content.querySelector(".porfolio-img").src =
    params.file;
    
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
  }
  
  function readStores(){
    return fetch(`https://cdn.contentful.com/spaces/owqcq2vmh47r/environments/master/entries/?access_token=L1K2v5QCmFaaXISM2dZ29zBcfONZ6k9MDPaeJa_MFVY&&content_type=stores`)
    .then(res=>{
      return res.json()
    }).then((data)=>{
      const fieldsCollections = data.items.map((item,i)=>{   
        return {
        title: item.fields.title,
        direction: item.fields.direction,
        description: item.fields.description,
        file: data.includes.Asset[i].fields.file.url
  };
  });
  return fieldsCollections
    });
  }
  
  function storesComponet(){
    readStores().then(function(works){
      for (const w of works)
      storesContainer(w);
    })
  }

  storesComponet()
  
