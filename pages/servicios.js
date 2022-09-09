//   fetch(`https://cdn.contentful.com/spaces/owqcq2vmh47r/environments/master/entries/?access_token=L1K2v5QCmFaaXISM2dZ29zBcfONZ6k9MDPaeJa_MFVY&&content_type=services`)

function servicesContainer(params){
  const template = document.querySelector("#services-container-template");
  const container = document.querySelector(".services-content");
  template.content.querySelector(".services-card-title").textContent =
  params.title;
  template.content.querySelector(".services-card-text").textContent =
  params.description;
  template.content.querySelector(".services-img").src =
  params.file;
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function readServices(){
  return fetch(`https://cdn.contentful.com/spaces/owqcq2vmh47r/environments/master/entries/?access_token=L1K2v5QCmFaaXISM2dZ29zBcfONZ6k9MDPaeJa_MFVY&&content_type=servicios`)
  .then(res=>{
    return res.json()
  }).then((data)=>{
    const fieldsCollections = data.items.map((item,i)=>{          return {
      title: item.fields.title,
      description: item.fields.description,
      file: data.includes.Asset[i].fields.file.url,
};
});
return fieldsCollections
  });
}

const servicesComponent =()=>{
  readServices().then(function(works){
    for (const w of works)
    servicesContainer(w);
  });
}
servicesComponent();