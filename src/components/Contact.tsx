"use client";

import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";

import { Mail, MapPin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".reveal").forEach((el, i) => {
            setTimeout(() => el.classList.add("visible"), i * 100);
          });
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const data = await response.json();

    alert(data.message);
    setLoading(false);
    if (data.success) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <ContactContent>
        <ContactInfo>
          <span className="intro">06. whats next</span>
          <h1 className="heading">Lets build something together.</h1>
          <p className="description">
            Whether you have a specific project in mind, an exciting
            opportunity, or just want to connect — my inbox is always open. Ill
            try my best to get back to you!
          </p>

          <ConnectBtn href="">
            <div className="icon-container">
              <Mail color="#64ffda" size={18} className="icon" />
            </div>
            <div className="link-container">
              <span>email me</span>
              <h1>hello@alexmercer.com</h1>
            </div>
          </ConnectBtn>
          <ConnectBtn href="">
            <div className="icon-container">
              <MapPin color="#64ffda" size={18} />
            </div>
            <div className="link-container">
              <span>location</span>
              <h1>San Francisco, CA</h1>
            </div>
          </ConnectBtn>

          <SubConnectBtnContainer>
            <SubConnectBtn>
              <LuGithub className="icon" />
            </SubConnectBtn>
            <SubConnectBtn>
              <LuLinkedin className="icon" />
            </SubConnectBtn>
            <SubConnectBtn>
              <LuTwitter className="icon" />
            </SubConnectBtn>
          </SubConnectBtnContainer>
        </ContactInfo>
        <FormContainer>
          <form action="" onSubmit={handleSubmit}>
            <FormInputContainer>
              <FormLabel htmlFor="">your name</FormLabel>
              <FormInput
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </FormInputContainer>
            <FormInputContainer>
              <FormLabel htmlFor="">email address</FormLabel>
              <FormInput
                type="text"
                name="email"
                id="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </FormInputContainer>
            <FormInputContainer>
              <FormLabel htmlFor="">message</FormLabel>
              <FormTextArea
                name="message"
                id="message"
                placeholder="Hello Alex! I am looking for a frontend developer to help build out a new SaaS product..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
            </FormInputContainer>
            <SendMessageBtn type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send color="#0a1929" size={16} />}
            </SendMessageBtn>
          </form>
        </FormContainer>
      </ContactContent>
    </ContactSection>
  );
}

export const ContactSection = styled.section`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  gap: 40px;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 50%;

  @media (max-width: 768px) {
    gap: 12px;
    width: 100%;
  }

  .intro {
    color: #64ffda;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .heading {
    color: #ccd6f6;
    font-family: var(--font-bricolage-grotesque);
    font-size: 60px;
    font-weight: 700;
    line-height: 1;
    width: 70%;

    @media (max-width: 768px) {
      font-size: 36px;
      width: 100%;
    }
  }

  .description {
    color: #8892b0;
    font-size: 18px;
    font-family: var(--font-bricolage-grotesque);
    line-height: 1.5;
    max-width: 620px;
    margin-bottom: 20px;
    width: 80%;

    @media (max-width: 768px) {
      font-size: 16px;
      width: 100%;
    }
  }
`;

export const ConnectBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  .icon-container {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #64ffdb2f;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  .link-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    span {
      color: #8892b0;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 400;
      line-height: 1;
    }

    h1 {
      color: #ccd6f6;
      font-family: var(--font-bricolage-grotesque);
      font-size: 16px;
      font-weight: 400;
      line-height: 1;
      transition: color 0.3s ease;

      @media (max-width: 768px) {
        margin-bottom: 0px;
      }
    }
  }

  &:hover {
    .icon-container {
      background-color: #64ffdb54;
    }

    .link-container h1 {
      color: #64ffda;
    }
  }
`;

export const SubConnectBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const SubConnectBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 1px solid #23355499;
  border-radius: 4px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    border 0.3s ease;

  .icon {
    font-size: 18px;
    color: #8892b0;
    transition: color 0.3s ease;
  }

  &:hover {
    border: 1px solid #64ffda;
    transform: translateY(-4px);

    .icon {
      color: #64ffda;
    }
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  height: fit-content;
  background-color: #0d1c37;
  border: 1px solid #23355499;
  border-radius: 12px;
  padding: 40px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  color: #8892b0;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const FormInput = styled.input`
  border: 1px solid #23355499;
  border-radius: 4px;
  background-color: transparent;
  padding: 12px 16px;
  outline: none;
  font-family: var(--font-bricolage-grotesque);
  color: #ccd6f6;

  &:focus {
    border: 1px solid #64ffda;
  }

  &:hover {
    border: 1px solid #64ffda;
  }

  &::placeholder {
    color: #8892b074;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

export const FormTextArea = styled.textarea`
  border: 1px solid #23355499;
  border-radius: 4px;
  background-color: #0b1b31;
  padding: 12px 16px;
  resize: none;
  outline: none;
  font-family: var(--font-bricolage-grotesque);
  color: #e5e7eb;

  &:focus {
    border: 1px solid #64ffda;
  }

  &:hover {
    border: 1px solid #64ffda;
  }

  &::placeholder {
    color: #8892b074;
    font-size: 16px;
  }
`;

export const SendMessageBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #64ffda;
  color: #0a1929;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 28px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;
