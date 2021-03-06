var noteBlock=[];
var noteView=[];
var dropCat=[];

var activeB=false;
var title, category, content;

$(document).ready(function(){
  dataParse(notes);
  $(".notes").append(noteBlock);
  $(".note-view").append(noteView);
  $.unique(dropCat);
  console.log(dropCat);
  $("#n-category").append(dropCat);

});


/* data manipulation*/
function dataParse(data){
  var num=1;
  var dkeys=Object.keys(data);
   $.each(data, function() {
    var id=dkeys[num];
    noteView.push(noteContent(id,this.url,this.title,this.updatedOn,this.content,));
    noteBlock.push(noteItem(this.title,this.category,this.updatedOn,this.url,id));
    dropCat.push(categoryList(this.category));
    num++
   });

}
/* Note list item*/
function noteItem(title,category,date,url,id){
  var dateTr= moment(date*1000).format("Do MMM YYYY");
    return "<article class='noteItem " + category + "'><p class='note-category'>"+ category +"</p><h4><a href='#"+url+"'>"+title + "</a></h4><p >"+dateTr+"</p></article>"
}
/* Note view item*/
function noteContent(id,url,title,date,content){
  var dateTr= moment(date*1000).format("Do MMM YYYY");
  var time =moment(date*1000).format('Do MMMM YYYY, h:mm:ss a');
   return "<article id='"+url+"' class='noteContent'><h2>"+ title +"</h2><p>Last edited: "+time+"</p><p>"+content+"</p><button id='"+id+"' type='button' class='btn btn-primary pull-right' data-toggle='modal' data-target='#noteForm' onclick='editNote(id)' >Edit Note</button></article>"
 }
 /* Dropdown categories menu*/
function categoryList(category){
  return "<option>"+category+"</option>"
}

function editNote(id){
  // $("#load").css('display','none');

  title= notes[id].title;
  category = notes[id].category;
  content= notes[id].content;
  $('#inputTitle').val(title);
  $('#n-category').val(category);
  $('#inputContent').val(content);
}

function addNote(){
  title= null;
  category = null;
  content= null;
  $('#inputTitle').val(title);
  $('#n-category').val(category);
  $('#inputContent').val(content);
}

var notes = {
   "note1":{
     "title":"The Basics of Western Astrology",
     "addedOn":"1494645183",
     "updatedOn": "1494940395",
     "category": "general",
     "url":"20170514-the-basics-of-wertern-astrology",
     "content": "<h3>Introduction</h3><p>This article covers the basics of Astrology and how they are inter-related. Astrology is defined as &rsquo;,the art or practice of determining the supposed influences of the planets and their motions on human affairs and human disposition'. From this practice a horoscope can be produced - a diagram (or chart) of the relative positions of planets and signs of the Zodiac at a specific time, usually the time of birth. A forecast can then be produced.</p><h3>The Zodiac</h3><p>Western Astrology originated way back, around 500 BC, with a concept called the Zodiac being developed. This comprised of an imaginary sphere surrounding the earth, which followed the path of the Sun through the constellations during the year. The Zodiac was split into twelve sections, each named after the specific constellation noted in that area.</p><h3>Elements</h3><p>Many ancient philosophies used a set of classical elements to explain the way nature behaved. Each sign was connected to one of the classical elements (fire, earth, air, or water) and was also related to a region of focus; social, personal or universal.</p><p>* Water signs are related to growth processes, identification and emotion. In tandem with the other elements, water feels that fire will make it boil, air will evaporate it, but earth will shape and channel it.</p><p>* Fire signs are related to action, passion, and energy. In tandem with the other elements, fire feels that earth will smother it, water will drown it, but air will fan and enliven it.</p><p>* Air signs are related to thought, perspective and communication. In tandem with the other elements, air feels that water will obscure it, earth will suffocate it, but fire will inspire and uplift it.</p>"
   },
   "note2":{
     "title":"Religion and Science",
     "addedOn":"1498899849",
     "updatedOn": "1498899849",
     "category": "history",
     "url":"20170701-religion-and-science",
     "content": "<p>The relationship between religion and science is the subject of continued debate in philosophy and theology. To what extent are religion and science compatible? Are religious beliefs sometimes conducive to science, or do they inevitably pose obstacles to scientific inquiry? The interdisciplinary field of &ldquo;science and religion&rdquo;, also called &ldquo;theology and science&rdquo;, aims to answer these and other questions. It studies historical and contemporary interactions between these fields, and provides philosophical analyses of how they interrelate.</p><p>This entry provides an overview of the topics and discussions in science and religion. Section 1 outlines the scope of both fields, and how they are related. Section 2 looks at the relationship between science and religion in three religious traditions, Christianity, Islam, and Hinduism. Section 3 discusses contemporary topics of scientific inquiry in which science and religion intersect, focusing on creation, divine action, and human origins. Section 4 concludes by looking at a few future directions of the study of science and religion.</p>"
   },
   "note3":{
     "title":"Comments on The importance of proper and improper English ",
     "addedOn":"1510477449",
     "updatedOn": "1510477449",
     "category": "literature",
     "url":"20171112-comments-on-the-importance-of-proper-and-improper-english",
     "content": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &rsquo;,Content here, content here&rsquo;, , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &rsquo;,lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>"
   },
   "note4":{
     "title":"Vampires the Romantic Ideology",
     "addedOn":"1500624249",
     "updatedOn": "1500624249",
     "category": "literature",
     "url":"2017/07/21/vampires-the-romantic-ideology",
     "content": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &rsquo;,Content here, content here&rsquo;, , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &rsquo;,lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>"
   },
   "note5":{
     "title":"Peace on Earth a Wonderful Whish",
     "addedOn":"1494144249",
     "updatedOn": "1494144249",
     "category": "philosophy",
     "url":"20170507-peace-on-earth-a-wonderful-whish",
     "content": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &rsquo;,Content here, content here&rsquo;, , making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &rsquo;,lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>"
   }

}
