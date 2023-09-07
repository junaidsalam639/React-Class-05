import React from "react";
import Navbar from "./Component/Navbar";
import { db, collection, addDoc, onAuthStateChanged, auth, ref, uploadBytes, storage, query, where, getDocs, getDownloadURL } from './Config/Firebase';

function App() {

  async function post () {
    const q = query(collection(db, "Detail-Dashboard"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    getDownloadURL(ref(storage, doc.id))
      .then((url) => {
        console.log(url);
        let post_add = document.getElementById('post_add');
        post_add.innerHTML += `
        <div className="col-lg-8">
        <section>
        <img src="${url}" alt="" style=${{ borderRadius: '15px' }}  className='p-3'/>
        <div className="para">
        <h4 className='fw-bold' id='title1'>${doc.data().title}</h4>
        <h6 className='text-center' style=${{ letterSpacing: '5px' }}>${doc.data().name1}</h6>
        </section>
        </div>
        <p className='mt-4' style=${{ letterSpacing: '1px' }}>${doc.data().description}!</p>
    </div>`
        console.log(doc.id);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  }
  post()

  return (
    <>
      <div className="App sticky-top">
        <Navbar />
      </div>
      {/* <!-- public post start --> */}
      <div className="container">
        <div className="row post_add col-lg-8" id='post_add'>

        </div>
      </div>
      {/* <!-- public post end --> */}
    </>

  );
}

export default App;
