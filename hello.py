import sys

def hello():
	if sys.argv[1] == "Mars":
		hellomars()
	elif sys.argv[1] == "Jupiter":
		hellowjupiter()
	else:
		helloworld()

def hellomars():
	print("Hello, Mars")


def helloworld():
	print("Hello, World")

======

	if sys.argv[1] == "Jupiter":
		hellojupiter()
	else:
		helloworld()

def hellojupiter():
	print("Hello, Jupiter")


