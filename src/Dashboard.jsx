import React from 'react'
import Navbar from './Component/Navbar'
import { db, collection, addDoc, onAuthStateChanged, auth, ref, uploadBytes, storage, query, where, getDocs , getDownloadURL } from './Config/Firebase';
import './index.css'

const Dashboard = () => {

  async function public_post() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        // Dashboard Data Bhejne ka code start
        let name1 = document.getElementById('name1');
        let title = document.getElementById('title');
        let description = document.getElementById('description');
        let image = document.getElementById('image').files[0];

        if (name1.value == '' || title.value == '' || description.value == '' || image == undefined) {
          alert('Please Fill The Input!')
        }
        else if (title.value.length >= 5 && title.value.length <= 50 && description.value.length >= 100 && description.value.length <= 3000) {
          try {
            const docRef = await addDoc(collection(db, "Detail-Dashboard"), {
              name1: name1.value,
              title: title.value,
              description: description.value,
              email: user.email,
            })
            console.log("Document written with ID: ", docRef.id);
            const storageRef = ref(storage, docRef.id);

            uploadBytes(storageRef, image).then((snapshot) => {
              console.log('Uploaded a blob or file!');
              alert('Dashboard Post Successfull');
              window.location.reload()
            });
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }
        else {
          alert('Post Title should be b/w 5 to 50 character and description should be b/w 100 to 3000 characters')
        }
        // Dashboard Data Bhejne ka code end
      } else {
        navigator('/')
      }
    })
  }
  
  // Dashboard Get data code start
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      let post_add = document.getElementById('post_add');
      const uid = user.uid;
      const q = query(collection(db, "Detail-Dashboard"), where("email", "==", user.email));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        getDownloadURL(ref(storage, doc.id))
  .then((url) => {
        console.log(url);
        post_add.innerHTML += `
        <div className="col-lg-8">
        <section>
        <img src="${url}" alt="" width=${120} height=${120} style=${{borderRadius : '15px'}}  className='p-3'/>
        <div className="para">
        <h4 className='fw-bold' id='title1'>${doc.data().title}</h4>
        <h6 className='text-center' style=${{letterSpacing: '5px'}}>${doc.data().name1}</h6>
        </section>
        </div>
        <p className='mt-4' style=${{letterSpacing: '1px'}}>${doc.data().description}!</p>
    </div>`
    console.log(doc.id);
  })
  .catch((error) => {
    console.log(error);
  });
      });
    } else {

    }
  });
    
  return (
    <div>
      <div className="sticky-top">
        <Navbar />
      </div>
      {/* <!-- dashboard start --> */}

      <div className="container-fluid">
        <div className="container">
          <h2 className="text-dark fw-bold p-4">Dashboard</h2>
        </div>
      </div>

      {/* <!-- dashboard end --> */}

      {/* <!-- public post start --> */}

      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mt-3 mb-3" style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
              <div className="input-group">
                <div className="input-group-prepend mt-3">
                </div>
                <input type="text" className="form-control mt-5" placeholder="Name" aria-label="Username" id="name1" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                </div>
                <input type="text" className="form-control mt-3" placeholder="Title" maxLength={50} aria-label="Username" id="title" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                </div>
                <input type="file" className="form-control mt-3" placeholder="Choose your picture" aria-label="Username" id="image" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                </div>
                <textarea className="form-control mt-3" id="description" aria-label="With textarea" placeholder="What is in your mind" maxLength={3000}></textarea>
              </div>
              <button type="button" className="btn btn-primary mt-4 mb-3 " style={{ backgroundColor: "#4834d4", fontWeight: "600" }}
                onClick={public_post}>Public Post</button>
            </div>
          </div>
        </div>

        {/* <!-- post start -/-> */}
        <div className="container">
          <h2 className="fw-bold mt-3">My Blogs</h2>
        </div>
      </div>

        {/* <!-- post end --> */}

      {/* <!-- public post start --> */}
        <div className="container">
          <div className="row post_add col-lg-8" id='post_add'>
         
          </div>
        </div>
      {/* <!-- public post end --> */}
    </div>
  )
}

export default Dashboard
