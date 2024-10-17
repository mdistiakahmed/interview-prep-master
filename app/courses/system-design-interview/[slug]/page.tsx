import React from "react";

const page = ({ params }: any) => {
  const { slug } = params;
  console.log(slug);
  return (
    <div className="p-6 ml-auto">
      <h1 className="text-2xl font-bold mb-4">Chapter Title</h1>
      <h2>{slug}</h2>
      <p>
        We were both young when I first saw you I close my eyes and the
        flashback starts Romeo, take me somewhere we can be alone
      </p>
    </div>
  );
};

export default page;
