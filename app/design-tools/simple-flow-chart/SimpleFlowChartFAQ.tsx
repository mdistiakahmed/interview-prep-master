import React from "react";

const SimpleFlowChartFAQ = () => {
  return (
    <section className="p-6 mt-28  text-gray-800">
      {/* Page Introduction */}
      <div className="introduction mb-8">
        <h1 className="text-2xl font-bold mb-4">
          Simplified Flow Chart Diagram Editor
        </h1>
        <p className="text-lg">
          Welcome to our Simple Flow Chart Diagram Editor! This tool is designed
          to help you easily create flowcharts and diagrams to visualize
          processes, relationships, and data structures. Use our intuitive
          editor to add shapes, connect them with lines, and create stunning
          visuals with ease. This page also covers common questions and tips for
          making the most out of this editor.
        </p>
      </div>

      {/* Frequently Asked Questions */}
      <div className="faq-section">
        <h2 className="text-xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        {/* FAQ 1 */}
        <div className="faq-item mb-6">
          <h3 className="text-lg font-medium">
            1. How do I add shapes to the flowchart?
          </h3>
          <p className="text-gray-700">
            To add shapes, simply go to the sidebar on the left, select a shape
            type (rectangle, circle, etc.), and it will be added to the editor.
            You can then drag it to your desired location.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="faq-item mb-6">
          <h3 className="text-lg font-medium">
            2. Can I customize the colors of the shapes?
          </h3>
          <p className="text-gray-700">
            Yes, you can select each shape and use the color options in the
            sidebar to customize its background and border colors. This allows
            you to create visually appealing diagrams with ease.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="faq-item mb-6">
          <h3 className="text-lg font-medium">
            3. How do I connect shapes with lines?
          </h3>
          <p className="text-gray-700">
            To connect shapes, select a shape and choose the connection tool in
            the editor. Drag from one shape to another to create a line,
            indicating relationships or flow between components in your diagram.
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="faq-item mb-6">
          <h3 className="text-lg font-medium">
            4. Is there an option to export the flowchart?
          </h3>
          <p className="text-gray-700">
            Yes, once you're done designing your flowchart, you can export it as
            an image file by clicking the "Download" button in the editor. This
            lets you easily save and share your work.
          </p>
        </div>

        {/* FAQ 5 */}
        <div className="faq-item mb-6">
          <h3 className="text-lg font-medium">
            5. How do I reset the flowchart if I want to start over?
          </h3>
          <p className="text-gray-700">
            You can reset your flowchart by clearing all shapes and connections
            through the "Reset" option in the sidebar. This will give you a
            clean slate to work with.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleFlowChartFAQ;
