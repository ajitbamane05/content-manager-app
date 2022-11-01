import Layout from "components/Layout";
import { useState } from "react";
import axios from "axios";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "High",
  timeToFinish: "60",
};

function AddNewResoures() {

  const [form, setForm] = useState(DEFAULT_DATA);

  const submitData = () => {
      axios.post("http://localhost:3000/api/resources",form)
      .then(()=>{})
      .catch((err)=>{alert(err?.response?.data)})
  }
  const resetData = () => setForm(DEFAULT_DATA)
  const handleOnChange = (e)=>{
       const {name,value} = e.target
        setForm({
          ...form,
          [name] :value
        })   
  }

  // const handleTitleChange =(e) =>{
  //   setForm({
  //     ...form,
  //     title : e.target.value})
  // }
  // const handleDescriptionChange =(e) =>{
  //   setForm({
  //     ...form,
  //     description : e.target.value})
  // }
  // const handleLinkChange = (e)=>{
  //   setForm({
  //     ...form,
  //     link: e.target.value})
  // }
  // const handlePriorityChange = (e)=>{
  //   setForm({
  //     ...form,
  //     priority: e.target.value})
  // }
  // const handleTimeToFinish = (e)=>{
  //   setForm({
  //     ...form,
  //     timeToFinish: e.target.value})
  // }
  return (
    <>
      <Layout>
        <form>
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="field add-new-resources">
                  <h1 className="title">Add New Resource</h1>
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      value={form.title} onChange={handleOnChange}
                      className="input"
                      name ="title"
                      type="text"
                      placeholder="Add Title for new contant"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="description"
                      value={form.description} onChange={handleOnChange}
                      placeholder="Description about contant"
                    ></textarea>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      name="link"
                      value={form.link} onChange={handleOnChange}
                      className="input"
                      type="text"
                      placeholder="https://nextjs.org"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select name="priority" value={form.priority} onChange={handleOnChange}>
                        <option>Less</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Time to finish</label>
                  <div className="control">
                    <input 
                      name="timeToFinish"
                      value={form.timeToFinish} onChange={handleOnChange}
                      className="input"
                      type="text"
                      placeholder="80"
                    />
                    <p className="help">Time to finish in minutes</p>
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button type="button" onClick={submitData}  className="button is-link">Submit</button>
                  </div>
                  <div className="control">
                    <button type="button" onClick={resetData} className="button is-link is-light">Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Layout>
    </>
  );
}
export default AddNewResoures;
