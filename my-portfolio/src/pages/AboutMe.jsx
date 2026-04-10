// src/pages/AboutMe.jsx
import React from 'react';

// Швидкі стилі для цієї сторінки
const pageCard = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  margin: '20px 0'
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  color: '#333',
  margin: '0 0 20px 0',
  borderBottom: '3px solid #007bff',
  display: 'inline-block',
  paddingBottom: '5px'
};

const sectionTitleStyle = {
  fontSize: '1.5rem',
  fontWeight: '600',
  color: '#007bff',
  marginTop: '25px',
  marginBottom: '10px'
};

const paragraphStyle = {
  lineHeight: '1.7',
  color: '#555',
  marginBottom: '15px',
  fontSize: '1.1rem'
};

const projectsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '20px',
  marginTop: '20px'
};

const projectCardStyle = {
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '20px',
  transition: 'transform 0.2s, box-shadow 0.2s',
  textDecoration: 'none',
  color: 'inherit',
  display: 'block'
};

const projectCardHoverStyle = {
  transform: 'translateY(-3px)',
  boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
};

const getProjectHeaderStyle = (color) => ({
  fontSize: '1.2rem',
  fontWeight: '600',
  color: color,
  marginBottom: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
});

const linkButtonStyle = {
  display: 'block',
  width: '100%',
  padding: '8px 12px',
  backgroundColor: '#f0f2f5',
  color: '#007bff',
  textDecoration: 'none',
  borderRadius: '6px',
  fontSize: '0.9rem',
  marginBottom: '8px',
  border: '1px solid #e0e0e0',
  textAlign: 'center'
};

// Простий компонент для картки (з ефектом наведення)
const ProjectCard = ({ title, icon, color, links }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div 
      style={{ ...projectCardStyle, ...(hover ? projectCardHoverStyle : {}) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={getProjectHeaderStyle(color)}>
        {icon} {title}
      </div>
      <div style={{ spaceY: '8px' }}>
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noreferrer" style={linkButtonStyle}>
            📁 {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div style={pageCard}>
      <h1 style={titleStyle}>Привіт, я Ярослав! 👋</h1>
      
      <section>
        <h2 style={sectionTitleStyle}>Про мене</h2>
        <p style={paragraphStyle}>
          Я студент з України, навчаюся в галузі комп'ютерних наук та інформаційних технологій. 
          Мій шлях у розробці почався з вивчення основ дискретної математики та алгоритмів, 
          що дало мені міцну базу для написання якісного коду. Зараз я фокусуюся на створенні 
          сучасних інтерфейсів за допомогою <strong>React</strong> та вивченні архітектури баз даних.
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Цінності та захоплення</h2>
        <p style={paragraphStyle}>
          Для мене важливо писати чистий код, який легко підтримувати. Окрім навчання, я люблю 
          занурюватися у світ "The Witcher 3" та розв'язувати логічні головоломки (як Wordle).
        </p>
      </section>

      <section>
        <h2 style={sectionTitleStyle}>Блок «Мої проєкти»</h2>
        <p style={paragraphStyle}>Заголовки карток ведуть на відповідні розділи в моєму GitHub.</p>
        
        <div style={projectsGridStyle}>
          
          {/* HTML + CSS */}
          <ProjectCard 
            title="HTML + CSS" 
            icon="🎨" 
            color="#e65100" // Теплий помаранчевий
            links={[
              { name: "HTML Basic Course", url: "https://github.com/Nice0000000/html-basic-c.git" },
              { name: "CSS Practice", url: "https://github.com/Nice0000000/css-pratice.git" }
            ]}
          />

          {/* JavaScript */}
          <ProjectCard 
            title="JavaScript" 
            icon="⚡" 
            color="#fbc02d" // Насичений жовтий
            links={[
              { name: "JS DOM Practice (Fork)", url: "https://github.com/roman-lipatov/js-DOM2.git" },
              { name: "JS Easy Tasks", url: "https://github.com/Nice0000000/js-easy.git" }
            ]}
          />

          {/* React */}
          <ProjectCard 
            title="React" 
            icon="⚛️" 
            color="#1976d2" // Глибокий синій
            links={[
              { name: "React Router DOM Project", url: "https://github.com/Nice0000000/react-router-dom2.git" }
            ]}
          />

        </div>
      </section>
    </div>
  );
};

export default AboutMe;