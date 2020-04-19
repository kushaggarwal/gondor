import { Form as BaseForm, FormGroup, Label } from 'reactstrap';
import Context from './context';
import ErrorMessage from './ErrorMessage';
import Input from './Input';
import Select from './Select';
import DatePicker from './DatePicker';

const Form = ({ children, errors = null, ...props }) => (
  <Context.Provider value={{ errors }}>
    <BaseForm {...props}>{children}</BaseForm>
  </Context.Provider>
);

Form.Group = FormGroup;
Form.Label = Label;
Form.Context = Context;
Form.ErrorMessage = ErrorMessage;
Form.Input = Input;
Form.Select = Select;
Form.DatePicker = DatePicker;

export default Form;
