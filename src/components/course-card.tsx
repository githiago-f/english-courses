import React from 'react';

export const CourseCard = () => (
  <div className="border-purple-600 border-2">
    <div>
      <picture>
        <source srcSet="https://baconmockup.com/301/200/" type="image/webp"/>
        <source srcSet="https://baconmockup.com/302/200/" type="image/png"/>
        <img src="https://baconmockup.com/303/200/" className="w-full" alt="Meu recurso" />
      </picture>
    </div>
    <div className="p-4">
      <h1 className="text-2xl" title="Course name">Course Name</h1>
      <div>
        <p className="text-base">Course body</p>
      </div>
      <div>
        <ul className="text-sm text-gray-400 inline-flex gap-2">
          <li>list,</li>
          <li>of,</li>
          <li>things</li>
        </ul>
      </div>
    </div>
  </div>
);
