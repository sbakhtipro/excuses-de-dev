<?php

class ExportExcuse {

    public string $actualExcuse = '';
    public array $db = [];

    public function __construct() {
        $this->db = $this->fetchDatabase();
    }

    private function fetchDatabase(): array {
        $db = 'database.json';
        $readDb = file_get_contents($db);
        $phpDb = json_decode($readDb,true);
        return $phpDb;
    }

    public function setActualExcuse($actualExcuse): void {
        $this->actualExcuse = $actualExcuse;
    }
    
    public function pickRandomExcuse(): array {
        $randomExcuse = $this->db[rand(0,count($this->db)-1)];
        if ($randomExcuse['http_code'] == $this->actualExcuse) {
            return $this->pickRandomExcuse();
        }
        return $randomExcuse;
    }

    public function export(): void {
        $excuse = $this->pickRandomExcuse();
        header('Content-Type: application/json');
        echo json_encode($excuse);
    }

}