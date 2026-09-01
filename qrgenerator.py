import qrcode

# Define the data you want to encode
data = "https://chatgpt.com/"

# Generate the QR code shortcut
img = qrcode.make(data)

# Save the image to your local directory
img.save("simple_qr.png")

print("Simple QR code saved as 'simple_qr.png'")
