import React, { useEffect } from 'react';

const FileOpener: React.FC = () => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Check if Ctrl+E is pressed
            if (event.ctrlKey && event.key === 'e') {
                event.preventDefault(); // Prevent default browser behavior
                
                // Create and trigger a file input click
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.style.display = 'none';
                document.body.appendChild(fileInput);
                
                fileInput.click();
                
                // Clean up
                fileInput.addEventListener('change', () => {
                    document.body.removeChild(fileInput);
                });
            }
        };

        // Add event listener
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return null; // This component doesn't render anything
};

export default FileOpener; 