import React from 'react'

const ButtonContext = React.createContext(true)

export const ButtonProvider = ButtonCotext.Provider;
export const BUttonConsumer = ButtonContext.Consumer;

export default ButtonContext;