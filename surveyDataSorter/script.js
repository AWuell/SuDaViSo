$(document).ready(function () {
    $("#uploadButton").on("click", function () {
        const fileInput = $("#fileInput")[0].files[0];
        
        if (fileInput) {
            const formData = new FormData();
            formData.append("file", fileInput);

            // Send the file to the server for validation and processing
            $.ajax({
                url: "/upload", // Update the URL to your server endpoint
                type: "POST",
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    // Display validation results in the .results div
                    $(".results").html(data);
                },
                error: function (error) {
                    console.error("Error uploading file: ", error);
                }
            });
        } else {
            alert("Please select a file to upload.");
        }
    });
});
