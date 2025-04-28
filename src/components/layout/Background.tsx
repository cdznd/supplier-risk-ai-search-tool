const Background = () => {
  return (
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1743485532768-9a5e07a2f666?q=80&w=3889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
      {/* Black overlay with low opacity */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
    </div>
  );
};

export default Background; 