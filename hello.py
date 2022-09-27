import sys

def hello():
	if sys.argv[1] == "Mars":
		hellomars()
	else:
		helloworld()

def hellomars():
	print("Hello, Mars")


def helloworld():
	print("Hello, World")

