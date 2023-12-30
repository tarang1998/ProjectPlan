import { useNavigate, /* other hooks */ } from 'react-router-dom'; 
import CreateProject from './CreateProject';

const withRouter = CreateProject => props => {
  const navigate = useNavigate();
  // other hooks

  return (
    <CreateProject
      {...props}
      {...{ navigate, /* other hooks */ }}
    />
  );
};

export default withRouter;