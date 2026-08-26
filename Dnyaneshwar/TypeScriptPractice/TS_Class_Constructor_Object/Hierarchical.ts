class MobileNetwork{

    connect(){
        console.log("connecting to mobile netword...")
    }
    call()
    {
        console.log("making voice call...")
    }

    sms()
    {
        console.log("sending sms..")
    }
}

class MobileNetword3G extends MobileNetwork{

    internet()
    {
        console.log(" 2G netword very slow..")
    }

}

class MobileNetword4G extends MobileNetwork{

Internet()
{
    console.log("High speed Internet...")
}

}

class MobileNetword5G extends MobileNetwork{

    HdVideoCalling()
    {
        console.log("HD video calling")
    }
}

var c= new MobileNetword3G()
c.call()
c.internet()
c.sms()
c.connect()

var d= new MobileNetword4G()
d.Internet()
d.call()
d.connect()
d.sms();


var e= new MobileNetword5G()

e.HdVideoCalling()
e.call()
e.connect()
e.sms()
