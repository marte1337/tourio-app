import styled from "styled-components";
import { StyledButton } from "./StyledButton.js";
import { useRouter } from "next/router";

export default function Form({ onSubmit, formName, defaultData }) {
  const router = useRouter();

  return (
    <FormContainer aria-labelledby={formName} onSubmit={onSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        name="name"
        type="text"
        defaultValue={defaultData?.name}
        placeholder="Enter Place Name"
        required
      />
      <Label htmlFor="image-url">
        <A
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash Image<Span> ➦🏛️</Span>
        </A>
      </Label>
      <Input
        id="image-url"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
        placeholder="https://images.unsplash.com/photo..."
        pattern="https://images.unsplash.com/photo.*"
        required
      />
      <Label htmlFor="location">Location</Label>
      <Input
        id="location"
        name="location"
        type="text"
        defaultValue={defaultData?.location}
        placeholder="Enter Location"
        required
      />
      <Label htmlFor="map-url">
        {" "}
        <A
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Maps Url <Span> ➦🌎</Span>
        </A>
      </Label>
      <Input
        id="map-url"
        name="mapURL"
        type="text"
        defaultValue={defaultData?.mapURL}
        placeholder="https://www.google.com/maps..."
        required
      />
      <Label htmlFor="description">Description</Label>
      <Textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        defaultValue={defaultData?.description}
        placeholder="Enter Description"
        required
      ></Textarea>
      <StyledButton type="submit">
        {defaultData ? "Update place" : "Add place"}
      </StyledButton>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid orange;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid orange;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  padding-top: 0.5rem;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
`;

const Span = styled.span`
  opacity: 0.3;
  :hover {
    opacity: 1;
  }
`;
