import { useState } from "react";
import PropTypes from "prop-types";
import {
  FormWrapper,
  FormContainer,
  Overlay,
  Form,
  FormGroup,
  Input,
  TextArea,
  ButtonGroup,
  Button,
  LogoContainer,
  Label,
} from "../../styles/AddProductForm.styles";
import petCareLogo from "../../images/pet-care-logo-v2.png";

const EditFeatureForm = ({ feature, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    id_caracteristica: feature.id_caracteristica,
    nombre: feature.nombre || "",
    descripcion: feature.descripcion || "",
    icono: feature.icono || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormWrapper>
      <Overlay onClick={onClose} />
      <FormContainer>
        <LogoContainer>
          <img src={petCareLogo} alt="PetCare Logo" />
        </LogoContainer>
        <Form onSubmit={handleSubmit}>
          <h2 style={{ color: "#314549" }}>Editar Característica</h2>

          <FormGroup>
            <Label>Nombre:</Label>
            <Input
              type="text"
              value={formData.nombre}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nombre: e.target.value,
                })
              }
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Descripción:</Label>
            <TextArea
              value={formData.descripcion}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  descripcion: e.target.value,
                })
              }
              rows={4}
              placeholder="Descripción de la característica"
            />
          </FormGroup>

          <FormGroup>
            <Label>Ícono:</Label>
            <Input
              type="text"
              value={formData.icono}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  icono: e.target.value,
                })
              }
              placeholder="URL o clase del ícono"
            />
          </FormGroup>

          <ButtonGroup>
            <Button type="button" className="cancel" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" className="submit">
              Guardar
            </Button>
          </ButtonGroup>
        </Form>
      </FormContainer>
    </FormWrapper>
  );
};

EditFeatureForm.propTypes = {
  feature: PropTypes.shape({
    id_caracteristica: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string,
    icono: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EditFeatureForm;
