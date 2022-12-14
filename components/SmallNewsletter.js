function SmallNewsletter({ resources }) {
  const getResources = () => {
    return resources.map((resource) => {
      return (
        <div key ={resource.title} className="column is-5 is-offset-1" >
        
            <div className="content is-medium">
              <h2 className="subtitle is-5 has-text-grey">{resource.title}</h2>
              <h1 className="title has-text-black is-3">
                {resource.timeToFinish}
              </h1>
              <p className="has-text-dark">{resource.description}</p>

          </div>
        </div>
       
      );
    });
  };
  return (
    <>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns is-multiline is-variable is-8">
                {
                  getResources()
                }
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default SmallNewsletter;
