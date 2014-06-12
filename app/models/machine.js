module.exports = function Machine ( name, status) {
    this.name = name;
    this.status = status ==  false ? '0' : status ;
}
