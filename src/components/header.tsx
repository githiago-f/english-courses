import React from 'react';

type Props = {
  title: string;
};

export const Header: React.FC<Props> = (props) => (
  <header className="bg-blue-700 py-6 mb-4">
    <h1 className="text-white text-3xl container mx-auto">{props.title}</h1>
  </header>
);
