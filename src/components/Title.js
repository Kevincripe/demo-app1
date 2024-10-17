

export const Title = ({title, visible}) => {

    return (
      <div>
          <h2>{visible ? title: null}</h2>
      </div>
    );
  }
  
export default Title;