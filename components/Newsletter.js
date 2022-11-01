function Newsletter({ resources }) {
  const getResources = () => {
    return resources.map( (resource) => {
      return (
        <div key={resource.id}>
            <section className="section" >
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="content is-medium">
                  <h2 className="subtitle is-4">{resource.title}</h2>
                  <h1 className="title">{resource.timeToFinish}</h1>
                  <p>{resource.description}</p>
                </div>
              </div>
            </div>
          </section>
          <div className="is-divider"></div>
        </div>
      );
    });
  };

  return (
    <>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">{getResources()}</div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
